import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import DataObjectIcon from "@mui/icons-material/DataObject";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { Grid, Typography } from "@mui/material";

export const MainListItems = () => {
  const login=JSON.parse(localStorage.getItem('login'));
  const [countlogs, setcountLogs] = useState(0);
  const [countalarm, setcountAlarm] = useState(0);
  function changeLog() {
    if (countlogs === 1) {
      document.getElementById("logs").style.display = "block";
      setcountLogs(0);
    } else {
      document.getElementById("logs").style.display = "none";
      setcountLogs(1);
    }
  }
  function changeAlarm() {
    if (countalarm === 1) {
      document.getElementById("alarm").style.display = "block";
      setcountAlarm(0);
    } else {
      document.getElementById("alarm").style.display = "none";
      setcountAlarm(1);
    }
  }
  function setLogout(){
    window.location.href="/"
  }
  return (
    <Grid
    container
    spacing={38}
    direction="column"
    justifyContent="space-evenly"
    alignItems="start"
  >
      <Grid item>
        <ListItem button onClick={()=>{window.location.href='/dashboard'}}>
          <ListItemIcon>
            <NetworkCheckIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Network Monitoring" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AltRouteIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Gateway Configuration" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DeviceHubIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Device Management" />
        </ListItem>
        <ListItem button onClick={changeLog}>
          <ListItemIcon>
            <LockOpenIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Logs" />
        </ListItem>
        <div id="logs" style={{ display: "none", marginLeft: "30px" }}>
          <ListItem button  onClick={()=>{window.location.href='/networklogs'}}>
            <ListItemIcon>
              <DataObjectIcon color="warning" />
            </ListItemIcon>
            <ListItemText primary="Data Logs" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NetworkWifiIcon color="warning" />
            </ListItemIcon>
            <ListItemText primary="Network Logs" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DeviceHubIcon color="warning" />
            </ListItemIcon>
            <ListItemText primary="Device Logs" />
          </ListItem>
        </div>
        <ListItem button onClick={changeAlarm}>
          <ListItemIcon>
            <EditNotificationsIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Alarms" />
        </ListItem>{" "}
        <div id="alarm" style={{ display: "none", marginLeft: "30px" }}>
          <ListItem>
            <ListItemIcon>
              <DataObjectIcon color="warning" />
            </ListItemIcon>
            <ListItemText primary="Data Alarm" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NetworkWifiIcon color="warning" />
            </ListItemIcon>
            <ListItemText primary="Network Alarm" />
          </ListItem>
        </div>
      </Grid>
      <Grid item>
        <div style={{padding:"0px 15px"}}>You signed as <br/><b>{login.email}</b></div>
        <ListItem button onClick={setLogout}>
          <ListItemIcon>
            <LogoutIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </Grid>
    </Grid>
  );
};
