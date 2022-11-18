import "./App.css";
import Box from "@mui/material/Box";
import Header from "components/header";
import Footer from "components/footer";
import CryptoEmission from "modules/CryptoEmission";

function App() {

  return (
    <Box sx={{ background: "#ccc"}}>
      <Header />
      <Box>
        <CryptoEmission/>
      </Box>
      <Footer/>
    </Box>
  );
}

export default App;
