import "./App.css";
import {useState} from "react";
import Box from "@mui/material/Box";
import Header from "components/header";
import Footer from "components/footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box minHeight="90vh">
      <Header/>
      <Outlet/>
      <Footer />
    </Box>
  );
}

export default App;
