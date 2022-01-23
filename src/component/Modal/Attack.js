import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import "./Rule.css";

export function Attack() {
  return (
    <fieldset style={{marginTop:"20px"}}>
      <legend>Attack Rules</legend>
      <div>
        <FormGroup sx={{ display: "flex", m: 2 }}>
          <div className="gridStyle">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Echo request"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Echo reply"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Timestamping"
            />
          </div>
          <div className="gridStyle">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Address Masking"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Redirection"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Source Quenching"
            />
          </div>
          <div className="gridStyle">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Parameter Problem"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Unreachable"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Any"
            />
          </div>
          <div>
            <Button variant="contained" sx={{mt:3}}>Block/Unblock Rules</Button>
          </div>
        </FormGroup>
      </div>
    </fieldset>
  );
}
