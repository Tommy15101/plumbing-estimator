import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const ToolsPage = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [volume, setVolume] = useState(null);

  const calculateVolume = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);
    if (!isNaN(l) && !isNaN(w) && !isNaN(d)) {
      const calculatedVolume = (l * w * d).toFixed(2); // Format to 2 decimal places
      setVolume(calculatedVolume);
    } else {
      setVolume("Invalid input");
    }
  };

  const clearFields = () => {
    setLength("");
    setWidth("");
    setDepth("");
    setVolume(null);
  };

  const tools = [
    {
      name: "Volume Calculator",
      description: "Estimate the volume of dirt, concrete, etc.",
      component: (
        <CardContent>
          <Typography variant="h6">Volume Calculator</Typography>
          <TextField
            label="Length (m)"
            variant="outlined"
            fullWidth
            margin="normal"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            type="number"
          />
          <TextField
            label="Width (m)"
            variant="outlined"
            fullWidth
            margin="normal"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            type="number"
          />
          <TextField
            label="Depth (m)"
            variant="outlined"
            fullWidth
            margin="normal"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            type="number"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={calculateVolume}
            style={{ marginTop: "16px", marginRight: "8px" }}
          >
            Calculate Volume
          </Button>
          <IconButton
            color="secondary"
            onClick={clearFields}
            style={{ marginTop: "16px" }}
          >
            <ClearIcon />
          </IconButton>
          {volume !== null && (
            <Typography variant="h6" style={{ marginTop: "16px" }}>
              Volume: {volume} cubic meters
            </Typography>
          )}
        </CardContent>
      ),
    },
    { name: "Tool 2", description: "Description of Tool 2" },
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
                tool.component
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
