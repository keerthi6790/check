import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField, Button } from "@mui/material";

export default function NetworkTableFilter(props,) {
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
          <MenuItem value="TimeStamp">TimeStamp</MenuItem>
          <MenuItem value="SourceIP">SourceIP</MenuItem>
          <MenuItem value="DestinationIP">DestinationIP</MenuItem>
          <MenuItem value="Protocol">Protocol</MenuItem>
          <MenuItem value="SourcePort">SourcePort</MenuItem>
          <MenuItem value="DestinationPort">DestinationPort</MenuItem>
          <MenuItem value="HeaderSize">HeaderSize</MenuItem>
          <MenuItem value="TTL">TTL</MenuItem>
          <MenuItem value="DataSize">DataSize</MenuItem>
          <MenuItem value="Sequence">Sequence</MenuItem>
        </Select>
        <TextField id="Textfield" sx={{my:2}} onChange={handleFilter} label="Filter value" />
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Filter
        </Button>
      </FormControl>
    </Box>
  );
}