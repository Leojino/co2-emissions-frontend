import "./App.css";
import {useState} from "react";
import Box from "@mui/material/Box";
import Header from "components/header";
import Footer from "components/footer";
import CryptoEmission from "modules/CryptoEmission";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const handleHeaderNavClick = (menu) => () => { setShowDialog(menu) };

  return (
    <Box sx={{ background: "#ccc" }}>
      <Header 
        navClick={handleHeaderNavClick}
      />
      <Box>
        <CryptoEmission />
      </Box>
      <Dialog open={showDialog} onClose={(e) => setShowDialog(false)}>
        <DialogTitle>Research Methodology</DialogTitle>
        <DialogContentText>
          <h1>{showDialog}</h1>
        </DialogContentText>
      </Dialog>
      <Footer />
    </Box>
  );
}

export default App;
