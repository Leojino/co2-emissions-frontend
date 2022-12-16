import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import datalist from "data/dataList";
import MainPanel from "components/MainPanel";
// import SidePanel from "components/SidePanel";
import MapFilter from "components/MapFilter";
import Summary from "components/SummaryBox";

export default function CryptoEmission() {
  const [data, setData] = useState(null);
  const [filterSettings, setFilterSettings] = useState({
    type: "electricity",
    set: datalist[0].name,
    markersOn: false,
    heatmapOn: true
  })

  // const [activeType, setActiveType] = useState("carbon");
  const [loading, setLoading] = useState(true);
  const [currentDataset, setCurrentDataset] = useState(datalist[0].name);
  const [totalValue, setTotalValue] = useState({});

  useEffect(() => {
    setLoading(true)
    getData();
  },[currentDataset])

  const getData = async () => {
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const response = await fetch(`data/${currentDataset}`, fetchOptions);
    const fetchData = await response.json();
    setData(fetchData.data);
    const total = fetchData.data.find( d => d.index === "Total" );
    setTotalValue(total);
    setLoading(false);
  };
  
  const handleFilterChange = (key, value) => {
    if(key == "set") {
      handleDatasetChange(value);
      return;
    }
    setFilterSettings( (previous) => ({
      ...previous,
      [key]: value
    } ))
  };

  const handleDatasetChange = (name) => {
    setData(null);
    setCurrentDataset(name);
  }

  return (
    <Grid container sx={{ position: "relative"}}>
        <MapFilter settings={filterSettings} onFilterChange={handleFilterChange} currentDataset={currentDataset}/>
        <MainPanel poolData={data} loading={loading} settings={filterSettings}/>
        <Summary current={filterSettings.type} total={totalValue}/>
    </Grid>
  );
}
