import {useState} from "react";
import { Container, Typography } from "@mui/material";

function About() {

  return (
    <>
      <Container maxWidth="md" sx={{minHeight: "85vh"}} className="pt-24 pb-24 h-3/4">
        <Typography variant="h3" sx={{marginBottom: 2}} className="text-red-600">
            About
        </Typography>
        <Typography variant="body1" gutterBottom>
        The York University Bitcoin CO2 Emissions Project is funded by York University’s Catalyzing
        Interdisciplinary Research Clusters initiative and is led by <strong>Dr. Andrea Podhorsky</strong>&nbsp;
        (<a href="https://andreapodhorsky.com" className="text-red-500" target="_blank">https://andreapodhorsky.com</a>), Department of Economics (<a href="https://www.yorku.ca/laps/econ/" target="_blank">https://www.yorku.ca/laps/econ/</a>),
        York University (<a href="https://www.yorku.ca" className="text-red-500" target="_blank">https://www.yorku.ca</a>) and York University’s Digital Currencies Project
        (<a href="https://www.yorku.ca/research/area/digitalcurrencies/" className="text-red-500" target="_blank">https://www.yorku.ca/research/area/digitalcurrencies/</a>). 
        </Typography>
        <Typography variant="body1" gutterBottom>
            Please direct any queries to her attention <a href="mailto:andrea@yorku.ca" className="text-red-500" target="_blank">andrea@yorku.ca</a>.
        </Typography>
      </Container>
    </>
  );
}

export default About;
