import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Co2Icon from "@mui/icons-material/Co2";
import BoltIcon from "@mui/icons-material/Bolt";

import datalist from 'data/dataList';

export default function MapFilter({ current, onFilterChange, onDatasetChange, currentDataset }) {
  // const theme = useTheme();
  // const smallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  // const [age, setAge] = useState("co2jan20_1-5jan.json");

  const handleChange = (event) => {
    onDatasetChange(event.target.value);
  };
  return (
      <Grid container sx={{ zIndex: 10}} className="bg-white p-2 pt-3 shadow">
        <Grid item xs={9}>
          <FormControl >
            <InputLabel id="date-range-select-label">Date</InputLabel>
            <Select
              labelId="date-range-select-label"
              id="date-range-select"
              value={currentDataset}
              label="Age"
              onChange={handleChange}
              size="small"
            >
              {
                datalist.map( data => (
                  <MenuItem key={data.name} value={data.name}>{data.label}</MenuItem>
                ) )
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item container justifyContent="flex-end" xs={3}>
          <ToggleButtonGroup color="success" value={current} exclusive onChange={onFilterChange} aria-label="emission" size="small">
            <ToggleButton value="carbon"><Co2Icon/></ToggleButton>
            <ToggleButton value="electricity"><BoltIcon/></ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
  );
}
