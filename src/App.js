import "./App.css";
import Box from "@mui/material/Box";
import Header from "components/header";
import CryptoEmission from "modules/CryptoEmission";

// const poolOne = data.data;

function App() {

  return (
    <Box>
      <Header />
      <Box sx={{height:"100vh", pt: 6}}>
        <CryptoEmission/>
      </Box>
    </Box>
  );
}

export default App;
