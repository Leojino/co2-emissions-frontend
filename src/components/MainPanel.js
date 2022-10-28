import { useState } from "react";
import Map from "./Map";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Grid from "@mui/material/Grid";
import Summary from "components/SummaryBox";

export default function MainPanel({ poolData, loading, current}) {
  const [openPoolDialog, setOpenPoolDialog] = useState(false);
  const [selectedPool, setSelectedPool] = useState({});


  const handleMarkerClick = (e, pool) => {
    setSelectedPool(pool);
    setOpenPoolDialog(true);
  };

  return (
    <Grid item xs={12} sx={{ position: "relative", height: 400 }}>
      {loading ? (
        "Please Wait..."
      ) : (
        <>
          <Map data={poolData} onMarkerClick={handleMarkerClick} />
          <Summary current={current} />
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
