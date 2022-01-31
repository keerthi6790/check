import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField, Button } from "@mui/material";
import axios from "axios";

export default function DataTableFilter(props) {

  // props.parentCallback(TableData)
  const [column, setColumn] = React.useState("");
  const [filterValue, setFilterValue] = React.useState("");
  const [finalValue, setFinalValue] = React.useState(0);
  const handleChange = (event) => {
    setColumn(event.target.value);
  };
  const handleFilter = (event) => {
    setFilterValue(event.target.value);
  };
  const handleSubmit = () => {
    const filteredData = props.data.filter((res) => {
      return(res[column] === filterValue);
    });
    setFinalValue(filteredData)
    props.parentCallback(filteredData)
  };
  console.log(finalValue);
  return (
    <Box sx={{ m: 3,p: 1,boxShadow: 3 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select the Column</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={column}
          label="Select the Column"
          onChange={handleChange}
        >
          <MenuItem value="SourceIP">SourceIP</MenuItem>
          <MenuItem value="DestinagationIP">DestinationIP</MenuItem>
          <MenuItem value="SentTime">SentTime</MenuItem>
          <MenuItem value="ReceivedTime">ReceivedTime</MenuItem>
          <MenuItem value="NodeID">NodeID</MenuItem>
          <MenuItem value="Temperature">Temperature</MenuItem>
          <MenuItem value="Humidity">Humidity</MenuItem>
          <MenuItem value="Light">Light</MenuItem>
          <MenuItem value="Sound">Sound</MenuItem>
          <MenuItem value="PIR">PIR</MenuItem>
          <MenuItem value="Distance">Distance</MenuItem>
          <MenuItem value="Size">Size</MenuItem>
          <MenuItem value="Anomaly">Anomaly</MenuItem>
        </Select>
        <TextField sx={{my:2}} onChange={handleFilter} label="Filter value" />
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Filter
        </Button>
      </FormControl>
    </Box>
  );
}