import DataTable from "./Datatable";
// import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SidePanel({ poolData }) {
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  if(smallScreen) {
    return (
      <div className="absolute w-12 h-12 bg-red-800 right-2 top-2"></div>  
    )
  }
  return (
    // <Drawer variant="permanent" anchor="right"sx={{
    //   width: 400,
    //   flexShrink: 0,
    //   [`& .MuiDrawer-paper`]: { width: 400, boxSizing: 'border-box' },
    // }}>
    <Grid item sm={12} >
      <Box sx={{p:2}}>
        {/* <h3>Pools</h3> */}
        <div className="border">
          <DataTable data={poolData} />
        </div>
      </Box>
    </Grid>
    // </Drawer>
  );
}
