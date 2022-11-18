import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
// import Container from '@mui/material/Container';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Co2Icon from "@mui/icons-material/Co2";
import BoltIcon from "@mui/icons-material/Bolt";
import RoomIcon from "@mui/icons-material/Room";
import MicrowaveIcon from '@mui/icons-material/Microwave';

import datalist from "data/dataList";

export default function MapFilter({ settings, onFilterChange, currentDataset }) {
  // const theme = useTheme();
  // const smallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  // const [age, setAge] = useState("co2jan20_1-5jan.json");

  const handleDatasetChange = (event) => {
    // onDatasetChange(event.target.value);
    onFilterChange("set", event.target.value);
  };

  const handleTypeChange = (event, type) => {
    onFilterChange("type", type);
  };
  return (
    <Grid container sx={{ zIndex: 10 }} className="bg-red-600 p-2 pt-4 shadow">
      <Grid item xs={9}>
        {/* <FormControl> */}
          {/* <InputLabel id="date-range-select-label">Date</InputLabel> */}
          <Select
            // labelId="date-range-select-label"
            // id="date-range-select"
            value={currentDataset}
            // label="Age"
            onChange={handleDatasetChange}
            size="small"
            sx={{background: "#fff"}}
          >
            {datalist.map((data) => (
              <MenuItem key={data.name} value={data.name}>
                {data.label}
              </MenuItem>
            ))}
          </Select>
        {/* </FormControl> */}
      </Grid>
      <Grid item container justifyContent="flex-end" xs={3} spacing={2}>
        <Grid item>
          <ToggleButton
            value="marker"
            selected={settings.markersOn}
            onChange={() => {
              onFilterChange("markersOn", !settings.markersOn);
            }}
            size="small"
            sx={{background:() => settings.markersOn ? "#ccc" : "#fff"  }}
            color="standard"
          >
            <RoomIcon />
          </ToggleButton>
        </Grid>
        <Grid item>
          <ToggleButton
            value="heatmap"
            selected={settings.heatmapOn}
            onChange={() => {
              onFilterChange("heatmapOn", !settings.heatmapOn);
            }}
            size="small"
            sx={{background:() => settings.heatmapOn ? "#ccc" : "#fff"  }}
            color="standard"
          >
            <MicrowaveIcon />
          </ToggleButton>
        </Grid>
        <Grid item>
          <ToggleButtonGroup color="success" value={settings.type} exclusive onChange={handleTypeChange} aria-label="emission" size="small"
            sx={{background: "#fff"}}
          >
            <ToggleButton value="carbon">
              <Co2Icon />
            </ToggleButton>
            <ToggleButton value="electricity">
              <BoltIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
}
