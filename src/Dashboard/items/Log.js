import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";

export default function SubLog() {
  return (
    <div style={{ WebkitTextFillColor: "blue", marginLeft: "10%" }}>
      <Link to='/networklogs'>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Data Log" />
      </ListItem>
      </Link>
      <Link to='/logs'>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Network Log" />
      </ListItem>
      </Link>
      <Link to='/loginData'>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Device Log" />
      </ListItem>
      </Link>
    </div>
  );
}
