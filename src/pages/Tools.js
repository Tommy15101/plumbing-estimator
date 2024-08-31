import React, { useState, useRef } from "react";
import { Container, Typography, Tabs, Tab, Box } from "@mui/material";
import VolumeCalculator from "../calculators/VolumeCalculator";
import StormwaterPitCalculator from "../calculators/StormwaterPitCalculator";
import ElectricalCalculator from "../calculators/ElectricalCalculator";
import SewerCalculator from "../calculators/SewerCalculator";
import StormwaterCalculator from "../calculators/StormwaterCalculator";
import GradeCalculator from "../calculators/GradeCalculator";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  const id = `tabpanel-${index}`;
  const ariaLabelledBy = `tab-${index}`;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={id}
      aria-labelledby={ariaLabelledBy}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const ToolsPage = () => {
  const [value, setValue] = useState(0);
  const tabsRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({
        left: direction === "left" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        style={{ margin: "32px 0", textAlign: "center" }}
      >
        Tools
      </Typography>

      <Box display="flex" alignItems="center">
        <Box flexGrow={1} overflow="hidden">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            aria-label="tool tabs"
            ref={tabsRef}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Volume Calculator"
              id="tab-0"
              aria-controls="tabpanel-0"
            />
            <Tab
              label="Stormwater Pit Calculator"
              id="tab-1"
              aria-controls="tabpanel-1"
            />
            <Tab
              label="Electrical Calculator"
              id="tab-2"
              aria-controls="tabpanel-2"
            />
            <Tab
              label="Sewer Calculator"
              id="tab-3"
              aria-controls="tabpanel-3"
            />
            <Tab
              label="Stormwater Calculator"
              id="tab-4"
              aria-controls="tabpanel-4"
            />
            <Tab
              label="Grade Calculator"
              id="tab-5"
              aria-controls="tabpanel-5"
            />
          </Tabs>
        </Box>
      </Box>

      <TabPanel value={value} index={0} id="tabpanel-0" aria-labelledby="tab-0">
        <VolumeCalculator />
      </TabPanel>
      <TabPanel value={value} index={1} id="tabpanel-1" aria-labelledby="tab-1">
        <StormwaterPitCalculator />
      </TabPanel>
      <TabPanel value={value} index={2} id="tabpanel-2" aria-labelledby="tab-2">
        <ElectricalCalculator />
      </TabPanel>
      <TabPanel value={value} index={3} id="tabpanel-3" aria-labelledby="tab-3">
        <SewerCalculator />
      </TabPanel>
      <TabPanel value={value} index={4} id="tabpanel-4" aria-labelledby="tab-4">
        <StormwaterCalculator />
      </TabPanel>
      <TabPanel value={value} index={5} id="tabpanel-5" aria-labelledby="tab-5">
        <GradeCalculator />
      </TabPanel>
    </Container>
  );
};

export default ToolsPage;
