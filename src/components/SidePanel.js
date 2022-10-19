import DataTable from "./Datatable";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function SidePanel({ poolData }) {
  return (
    <Drawer variant="permanent" anchor="right"sx={{
      width: 400,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: 400, boxSizing: 'border-box' },
    }}>
      <Box sx={{p:2}}>
        <Toolbar/>
        <h3>Pools</h3>
        <div className="border">
          <DataTable data={poolData} />
        </div>
      </Box>
    </Drawer>
  );
}
