import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Co2Icon from "@mui/icons-material/Co2";
import BoltIcon from "@mui/icons-material/Bolt";

export default function MapFilter({ current, onFilterChange }) {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="absolute top-1 left-0 w-full z-10 p-2 flex">
      <Grid container>
        <Grid item xs={9}>
          <FormControl >
            <InputLabel id="demo-simple-select-label">Date</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
              size="small"
            >
              <MenuItem value={10}>3 months ago</MenuItem>
              <MenuItem value={20}>6 months ago</MenuItem>
              <MenuItem value={30}>1 year ago</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item container justifyContent="flex-end" xs={3}>
          <ToggleButtonGroup color="success" value={current} exclusive onChange={onFilterChange} aria-label="Platform" size="small">
            <ToggleButton value="carbon"><Co2Icon/></ToggleButton>
            <ToggleButton value="electricity"><BoltIcon/></ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
}
