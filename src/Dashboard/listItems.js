import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SubLog from "./items/Log";
import SubAlarm from "./items/subAlarm";
import SubGateway from "./items/Gateway";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import DevicesIcon from "@mui/icons-material/Devices";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AlarmIcon from "@mui/icons-material/Alarm";
import { Link } from "react-router-dom";
import { Assignment, Logout } from "@mui/icons-material";
import { Grid, ListSubheader } from "@mui/material";
export  function ListItems() {

  const login=JSON.parse(localStorage.getItem('login'));
  const [list, setList] = React.useState(false);
  const [alarm, setAlarm] = React.useState(false);
  const [gateway, setGateway] = React.useState(false);

 
  function handleList() {
    setList(!list);
  }
  function handleAlarm() {
    setAlarm(!alarm);
  }
  function handleGateway() {
    setGateway(!gateway);
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
        <Link to="/dashboard">
          <ListItem button>
            <ListItemIcon>
              <NetworkCheckIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Network Monitoring" />
          </ListItem>
        </Link>
        <ListItem button onClick={handleGateway}>
          <ListItemIcon>
            <AltRouteIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Gateway Configuration" />
        </ListItem>
        {gateway ? <SubGateway /> : null}
        <ListItem button>
          <ListItemIcon>
            <DevicesIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Device Management" />
        </ListItem>
        <ListItem button onClick={handleList}>
          <ListItemIcon>
            <VpnKeyIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Log" />
        </ListItem>
        {list ? <SubLog /> : null}
        <ListItem button onClick={handleAlarm}>
          <ListItemIcon>
            <AlarmIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Alarm" />
        </ListItem>
        {alarm ? <SubAlarm /> : null}
      </Grid>
      <Grid item>
        <div style={{ padding: "0px 15px" }}>
          You signed as <br />
          <b>{login.email}</b>
        </div>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <Logout color="warning" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Link>
      </Grid>
    </Grid>
  );
}
