// import { useState } from "react";
import Switch from "@mui/material/Switch";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
// import Container from '@mui/material/Container';
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";

import Co2Icon from "@mui/icons-material/Co2";
import BoltIcon from "@mui/icons-material/Bolt";
import RoomIcon from "@mui/icons-material/Room";
import WavesIcon from "@mui/icons-material/Waves";

import datalist from "data/dataList";

export default function MapFilter({ settings, onFilterChange, currentDataset }) {
  // const theme = useTheme();
  // const smallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  // const [age, setAge] = useState("co2jan20_1-5jan.json");

  const handleDatasetChange = (event) => {
    onFilterChange("set", event.target.value);
  };

  const handleTypeChange = (event, type) => {
    // console.log(event.target.value);
    onFilterChange("type", settings.type == "electricity" ? "carbon" : "electricity");
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <Grid container sx={{ zIndex: 10 }} className="bg-red-600 p-2 shadow">
      <Grid item xs={6}>
        <FormControl variant="standard">
          <InputLabel sx={{ color: "#fff" }} id="date-range-select-label">
            Date
          </InputLabel>
          <Select
            labelId="date-range-select-label"
            id="date-range-select"
            value={currentDataset}
            label="Age"
            onChange={handleDatasetChange}
            size="small"
            sx={{
              color: "#fff",
              "&:before": {
                borderColor: "#fff",
              },
            }}
          >
            {datalist.map((data) => (
              <MenuItem key={data.name} value={data.name}>
                {data.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item container justifyContent="flex-end" xs={6} spacing={2}>
        <Grid item>
          <RoomIcon className={settings.markersOn ? "text-neutral-200" : "text-gray-500"} />
          <Tooltip title={settings.markersOn ? "Hide Markers" : "Show Markers"}>
            <Switch
              {...label}
              checked={settings.markersOn}
              onChange={() => {
                onFilterChange("markersOn", !settings.markersOn);
              }}
              color="warning"
            />
          </Tooltip>
          {/* <ToggleButton
              value="marker"
              selected={settings.markersOn}
              onChange={() => {
                onFilterChange("markersOn", !settings.markersOn);
              }}
              size="small"
              sx={{background:"#fff" }}
              color="standard"
              >
              <RoomIcon className={settings.markersOn ? "text-neutral-200" : "text-gray-500"}/>
            </ToggleButton> */}
        </Grid>
        <Divider orientation="vertical" variant="middle" flexItem className="relative top-2" />
        <Grid item>
          {/* <ToggleButton
              value="heatmap"
              selected={settings.heatmapOn}
              onChange={() => {
                onFilterChange("heatmapOn", !settings.heatmapOn);
              }}
              size="small"
              sx={{ background: "#fff" }}
              color="standard"
              >
            </ToggleButton> */}
          <>
            <WavesIcon className={settings.heatmapOn ? "text-neutral-200" : "text-gray-500"} />
            <Tooltip title={settings.heatmapOn ? "Hide Heatmap cloud" : "Show Heatmap cloud"}>
              <Switch
                {...label}
                checked={settings.heatmapOn}
                onChange={() => {
                  onFilterChange("heatmapOn", !settings.heatmapOn);
                }}
                color="warning"
              />
            </Tooltip>
          </>
        </Grid>
        <Divider orientation="vertical" variant="middle" flexItem className="relative top-2" />
        <Grid item>
          <Co2Icon className={settings.type == "carbon" ? "text-green-600" : "text-gray-500"} />
          <Tooltip title={"Select view type"}>
            <Switch checked={settings.type == "electricity"} onChange={handleTypeChange} />
          </Tooltip>
          <BoltIcon className={settings.type == "electricity" ? "text-blue-500" : "text-gray-500"} />
        </Grid>
      </Grid>
    </Grid>
  );
}
