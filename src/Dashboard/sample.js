import { TabPanel } from "@mui/lab";
import { Tab, Tabs } from "@mui/material";
import React from "react";
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const Sample = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs orientation="vertical" onChange={handleChange} value={value}>
        <Tab label="item 1" {...a11yProps(0)}></Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        item one
      </TabPanel>
    </div>
  );
};
export default Sample;
