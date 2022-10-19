import "./App.css";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Header from "components/header";
import MainPanel from "components/MainPanel";
import SidePanel from "components/SidePanel";
// import poolOne from 'data/pool_1.json';
import poolOne from 'data/pool_2.json';

function App() {
  return (
    <Box>
      <Header />
      <Box sx={{display: "flex", height:"100vh", pt: 6}}>
        <MainPanel poolData={poolOne}/>
        <SidePanel poolData={poolOne}/>
      </Box>
    </Box>
  );
}

export default App;
