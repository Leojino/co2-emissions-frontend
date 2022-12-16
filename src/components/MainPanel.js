import { useEffect, useState } from "react";
import Map from "./Map";
import Grid from "@mui/material/Grid";

export default function MainPanel({ poolData, loading, settings}) {
  const [openPoolDialog, setOpenPoolDialog] = useState(false);
  const [selectedPool, setSelectedPool] = useState({});

  const handleMarkerClick = (e, pool) => {
    setSelectedPool(pool);
    setOpenPoolDialog(true);
  };

  return (
    <Grid item xs={12} sx={{ position: "relative", height: "70vh"}}>
      <Map data={poolData} onMarkerClick={handleMarkerClick} settings={settings}/>
      {/* {loading ? (
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
      )} */}
    </Grid>
  );
}
