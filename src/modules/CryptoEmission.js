import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import datalist from "data/dataList";
import MainPanel from "components/MainPanel";
import SidePanel from "components/SidePanel";
import MapFilter from "components/MapFilter";

export default function CryptoEmission() {
  const [data, setData] = useState(null);
  const [activeType, setActiveType] = useState("carbon");
  const [loading, setLoading] = useState(true);
  const [currentDataset, setCurrentDataset] = useState(datalist[2].name);

  useEffect(() => {
    getData();
  }, []);

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
    setLoading(false);
  };
  
  const handleFilterChange = (e, type) => {
    setActiveType(type);
  };

  const handleDatasetChange = (name) => {
    setCurrentDataset(name);
  }

  return (
    <Grid container sx={{ position: "relative" }}>
        <MapFilter current={activeType} onFilterChange={handleFilterChange} currentDataset={currentDataset} onDatasetChange={handleDatasetChange}/>
        <MainPanel poolData={data} loading={loading} current={activeType}/>
        <SidePanel poolData={data} loading={loading}/>
    </Grid>
  );
}
