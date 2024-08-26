// src/ToolsPage.js

import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import VolumeCalculator from "../calculators/VolumeCalculator"; // Import the VolumeCalculator component
import StormwaterPitCalculator from "../calculators/StormwaterPitCalculator";

const ToolsPage = () => {
  const tools = [
    {
      name: "Volume Calculator",
      description: "Estimate the volume of dirt, concrete, etc.",
      component: <VolumeCalculator />, // Use the VolumeCalculator component here
    },
    {
      name: "Stormwater Pit Size Calculator",
      description: "Calculate the required size and number of stormwater pits.",
      component: <StormwaterPitCalculator />, // Use the StormwaterCalculator component here
    },
    { name: "Tool 3", description: "Description of Tool 3" },
    { name: "Tool 4", description: "Description of Tool 4" },
  ];

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        style={{ margin: "32px 0", textAlign: "center" }}
      >
        Tools
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {tools.map((tool, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              {tool.component ? (
                <CardContent>{tool.component}</CardContent>
              ) : (
                <>
                  <CardContent>
                    <Typography variant="h6">{tool.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {tool.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      More Info
                    </Button>
                    <Button size="small" color="primary">
                      Buy Now
                    </Button>
                  </CardActions>
                </>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ToolsPage;
