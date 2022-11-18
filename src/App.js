import "./App.css";
import Box from "@mui/material/Box";
import Header from "components/header";
import Footer from "components/footer";
import CryptoEmission from "modules/CryptoEmission";

function App() {

  return (
    <Box>
      <Header />
      <Box sx={{ pt: 6}}>
        <CryptoEmission/>
      </Box>
      <Footer/>
    </Box>
  );
}

export default App;
