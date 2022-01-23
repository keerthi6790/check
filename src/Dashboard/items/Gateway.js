import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const Firewall = (
  <div style={{ WebkitTextFillColor: "green", marginLeft: "15%" }}>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Start" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Stop" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Flush" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Quit" />
    </ListItem>
  </div>
);

export const Edit = (
  <div style={{ WebkitTextFillColor: "green", marginLeft: "15%" }}>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Interfaces" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Default Settings" />
    </ListItem>
  </div>
);

export const Event = (
  <div style={{ WebkitTextFillColor: "green", marginLeft: "15%" }}>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Clear" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reload" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Save Rules" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Restore Rules" />
    </ListItem>
  </div>
);

export const Policy = () => {

  return (
    <div style={{ WebkitTextFillColor: "green", marginLeft: "15%" }}>
      <Link to='/appendRule'>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Apend Rule" />
      </ListItem>
      </Link>
      <Link to="/delete">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Delete Rule" />
      </ListItem>
      </Link>
      <Link to='/insertRule'>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Insert Rules" />
      </ListItem>
      </Link>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Show Rules" />
      </ListItem>
    </div>
  );
};

export default function SubGateway() {
  const [firewall, setFirewall] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [event, setEvent] = React.useState(false);
  const [policy, setPolicy] = React.useState(false);

  function handleFirewall() {
    setFirewall(!firewall);
  }
  function handleEdit() {
    setEdit(!edit);
  }
  function handleEvent() {
    setEvent(!event);
  }
  function handlePolicy() {
    setPolicy(!policy);
  }
  return (
    <div style={{ WebkitTextFillColor: "blue", marginLeft: "10%" }}>
      <ListItem button onClick={handleFirewall}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Firewall" />
      </ListItem>
      {firewall ? Firewall : null}
      <ListItem button onClick={handleEdit}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Edit" />
      </ListItem>
      {edit ? Edit : null}
      <ListItem button onClick={handleEvent}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Event" />
      </ListItem>
      {event ? Event : null}
      <ListItem button onClick={handlePolicy}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Policy" />
      </ListItem>
      {policy ? <Policy/> : null}
      <Link to="/attack">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Attack" />
      </ListItem>
      </Link>
    </div>
  );
}
