import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

import React, { useState } from "react";
import "./Rule.css";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;
function DeleteRule() {
  return (
    <div style={{ padding: "50px" }}>
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <Tab>Delete Rule</Tab>
          <Tab>Flush Rule</Tab>
        </TabsList>
        <TabPanel value={0}>{DeleteRule1()}</TabPanel>
        <TabPanel value={1}>{DeleteRule2()}</TabPanel>
      </TabsUnstyled>
    </div>
  );
}
function DeleteRule1() {
  const [table, setTable] = useState("");
  function handleTableChange(event) {
    setTable(event.target.value);
  }
  const [chain, setChain] = useState("");
  function handleChainChange(event) {
    setChain(event.target.value);
  }
  function handleSubmit(){
    const error=document.getElementsByClassName('error');
    console.log(error);
    if(table===""){
         error[0].style.display="block"
    }
    else if(chain===""){
      error[0].style.display="none"
      error[1].style.display="block"
    }
    else {
      error[1].style.display="none"
      alert("Delete Rule is inserted")
    }
  }
  return (
    <div style={{ display: "flex" }}>
      <fieldset>
        <legend>Delete Rule</legend>
        <div>
          <div className="flexStyle">
            <div>
              <Typography>Table</Typography>
            </div>
            <div>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={table}
                  onChange={handleTableChange}
                >
                  <MenuItem value="filter">Filter</MenuItem>
                  <MenuItem value="filter">Filter</MenuItem>
                </Select>
              </FormControl>
              <div className="error">Select any one</div>
            </div>
          </div>
          <div className="flexStyle">
            <div>
              <Typography>Chain</Typography>
            </div>
            <div>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={chain}
                  onChange={handleChainChange}
                >
                  <MenuItem value="input">Input</MenuItem>
                  <MenuItem value="output">Output</MenuItem>
                </Select>
              </FormControl>
              <div className="error">Select any one</div>
            </div>
          </div>
          <div className="flexStyle">
            <div>
              <Typography>Delete Position</Typography>
            </div>
            <div>
              <TextField type="number" />
            </div>
          </div>
          <div>
            <Button type="submit" onClick={handleSubmit} variant="contained">
              Delete Rule
            </Button>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
function DeleteRule2() {
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 0.5fr"}}>
      <fieldset>
        <legend>Flush Tables</legend>
        <div>
          <div style={{ margin: "0px 30px" }}>
            <div>
              <FormGroup sx={{ m: 2 }}>
                <div
                  style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Filter Table"
                  />
                  <FormControlLabel control={<Checkbox />} label="NAT Table" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Mangle Table"
                  />
                </div>
              </FormGroup>
            </div>
            <div>
              <Button type="submit" variant="contained">
                Flush Tables
              </Button>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
export default DeleteRule;
