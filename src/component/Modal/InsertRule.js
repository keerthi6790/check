import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import "./Rule.css";
import React from "react";
import TextField from "@mui/material/TextField";
export const InsertRule = () => {
  const [chain, setChain] = React.useState("");
  const [Action, setAction] = React.useState("");
  const [protocol, setProtocol] = React.useState("");

  const handleChainChange = (event) => {
    setChain(event.target.value);
  };
  const handleActionChange = (event) => {
    setAction(event.target.value);
  };
  const handleProtocolChange = (event) => {
    setProtocol(event.target.value);
  };
  let addressRegex = new RegExp("[0-9]{3}.[0-9]{3}.[0-9]{3}.[0-9]{3}");
  const handleAppendRule = (event) => {
    var a1 = document.getElementById("macValue");
    var a = document.getElementById("sourceValue");
    var b = document.getElementById("portValue");
    var c = document.getElementById("destinationValue");
    var d = document.getElementById("destinationPortValue");
    var e = document.getElementById("positionValue");
    var error = document.getElementsByClassName("error");
    console.log(chain);
    if (chain === "") {
      error[0].style.display = "block";
    } else if (Action === "") {
      error[0].style.display = "none";
      error[1].style.display = "block";
    } else if (protocol === "") {
      error[1].style.display = "none";
      error[2].style.display = "block";
    } else {
      if (!addressRegex.test(a1.value)) {
        error[2].style.display = "none";
        error[3].style.display = "block";
      } else if (!addressRegex.test(a.value)) {
        error[3].style.display = "none";
        console.log("false");
        error[4].style.display = "block";
      } else if (!addressRegex.test(b.value)) {
        error[4].style.display = "none";
        error[5].style.display = "block";
      } else if (!addressRegex.test(c.value)) {
        error[5].style.display = "none";
        error[6].style.display = "block";
      } else if (!addressRegex.test(d.value)) {
        error[6].style.display = "none";
        error[7].style.display = "block";
      } else if (e === "") {
        error[7].style.display = "none";
        error[8].style.display = "block";
      } else {
        error[8].style.display = "none";
        alert("Rule is appended Successfully");
      }
    }
};
return (
  <div className="wholeContainer">
    <div>
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
              <MenuItem value="output">Output</MenuItem>
              <MenuItem value="input">Input</MenuItem>
            </Select>
          </FormControl>
          <div className="error">Select any one</div>
        </div>
      </div>
      <div className="flexStyle">
        <div>
          <Typography>Action</Typography>
        </div>
        <div>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Action}
              onChange={handleActionChange}
            >
              <MenuItem value="output">Reject</MenuItem>
              <MenuItem value="input">Eject</MenuItem>
            </Select>
          </FormControl>
          <div className="error">Select any one</div>
        </div>
      </div>
      <div className="flexStyle">
        <div>
          <Typography>Protocol</Typography>
        </div>
        <div>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={protocol}
              onChange={handleProtocolChange}
            >
              <MenuItem value="output">TCP</MenuItem>
              <MenuItem value="input">IP</MenuItem>
            </Select>
          </FormControl>
          <div className="error">Select any one</div>
        </div>
      </div>
      <div className="flexStyle">
        <div>
          <Typography>MAC Address</Typography>
        </div>
        <div>
          <TextField variant="outlined" id="macValue" />
          <div className="error " id="sourceError">
            MAC Address is invalid
          </div>
        </div>
      </div>
      <div className="flexStyle">
        <div>
          <Typography>Source Address</Typography>
        </div>
        <div>
          <TextField variant="outlined" id="sourceValue" />
          <div className="error " id="sourceError">
            Source Address is invalid
          </div>
        </div>
      </div>
      <div className="flexStyle">
        <div>
          <Typography>Source Port</Typography>
        </div>
        <div>
          <TextField variant="outlined" id="portValue" />
          <div className="error " id="portError">
            Source Port is invalid
          </div>
        </div>
      </div>

      <div className="flexStyle">
        <div>
          <Typography>Destination Address</Typography>
        </div>
        <div>
          <TextField variant="outlined" id="destinationValue" />
          <div className="error" id="destinationError">
            Destination Address is invalid
          </div>
        </div>
      </div>
      <div className="flexStyle">
        <div>
          <Typography>Destination Port</Typography>
        </div>
        <div>
          <TextField variant="outlined" id="destinationPortValue" />
          <div className="error " id="destinationPortError">
            Destination Port is invalid
          </div>
        </div>
      </div>
      <div className="flexStyle">
        <div>
          <Typography>Insertion Position</Typography>
        </div>
        <div>
          <TextField variant="outlined" id="positionValue" />
          <div className="error ">Position is empty</div>
        </div>
      </div>
      <div className="buttonStyle">
        <Button type="submit" variant="contained" onClick={handleAppendRule}>
          Insert Rule
        </Button>
      </div>
    </div>
  </div>
);
}