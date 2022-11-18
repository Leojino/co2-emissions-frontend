import { useEffect, useState } from "react";
import Map from "./Map";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Grid from "@mui/material/Grid";
import Summary from "components/SummaryBox";

export default function MainPanel({ poolData, loading, settings}) {
  const [openPoolDialog, setOpenPoolDialog] = useState(false);
  const [selectedPool, setSelectedPool] = useState({});
  const [totalValue, setTotalValue] = useState({});

  const handleMarkerClick = (e, pool) => {
    setSelectedPool(pool);
    setOpenPoolDialog(true);
  };

  useEffect( () => {
    if(!poolData) return;
    const total = poolData.find( d => d.index === "Total" );
    setTotalValue(total);
  }, [poolData] )
  

  return (
    <Grid item xs={12} sx={{ position: "relative", height: 550 }}>
      <Map data={poolData} onMarkerClick={handleMarkerClick} settings={settings}/>
      <Summary current={settings.type} total={totalValue}/>
      {loading ? (
        "Please Wait..."
      ) : (
        <>
          <Dialog open={openPoolDialog} onClose={(e) => setOpenPoolDialog(false)}>
            <DialogTitle>{selectedPool.Pools}</DialogTitle>
            <DialogContentText>
              <span>{selectedPool.Locations}</span>
            </DialogContentText>
            <DialogContentText>
              <span>{selectedPool.CO2_emissions}</span>
            </DialogContentText>
          </Dialog>
        </>
      )}
    </Grid>
  );
}
