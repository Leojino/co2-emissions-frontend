import { useState } from "react";
import MapFilter from "./MapFilter";
import Map from "./Map";
import Summary from "./SummaryBox";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';

export default function MainPanel({poolData}) {
  const [activeType, setActiveType] = useState("carbon");
  const [openPoolDialog, setOpenPoolDialog] = useState(false);
  const [selectedPool, setSelectedPool] = useState({});

  const handleFilterChange = (e, type) => {
    setActiveType(type);
  };

  const handleMarkerClick = (e, pool) => {
    setSelectedPool(pool);
    setOpenPoolDialog(true);
  }
  
  return (
    <div className="grow relative">
        <MapFilter current={activeType} onFilterChange={handleFilterChange}/>
        <Map data={poolData} onMarkerClick={handleMarkerClick}/>
        <Summary current={activeType}/>
        <Dialog open={openPoolDialog} onClose={e => setOpenPoolDialog(false)}>
          <DialogTitle>{selectedPool.pool_name}</DialogTitle>
          <DialogContentText>
            <div>{selectedPool.ISP}</div>
            <div>{selectedPool.ip_address}</div>
            <div>{selectedPool.locations}</div>
          </DialogContentText>
        </Dialog>
    </div>
  );
}
