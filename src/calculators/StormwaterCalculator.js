import React, { useState, useEffect } from "react";
import { Box, TextField, Typography, Paper, Grid } from "@mui/material";

// Example data for Sunshine Coast
const RAINFALL_DATA = {
  averageAnnualRainfall: 1800, // mm per year
  rainfallIntensity: 100, // mm per hour
  rainfallIntensityHourly: 100, // mm/hour
};

const PIPE_CAPACITY = 0.0025; // cubic meters per second per square meter of pipe cross-section

const StormwaterCalculator = () => {
  const [roofLength, setRoofLength] = useState("");
  const [roofWidth, setRoofWidth] = useState("");
  const [groundLength, setGroundLength] = useState("");
  const [groundWidth, setGroundWidth] = useState("");
  const [pipeLength1, setPipeLength1] = useState("");
  const [pipeDiameter1, setPipeDiameter1] = useState("");
  const [pipeLength2, setPipeLength2] = useState("");
  const [pipeDiameter2, setPipeDiameter2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const length = parseFloat(roofLength);
    const width = parseFloat(roofWidth);
    const groundLen = parseFloat(groundLength);
    const groundWid = parseFloat(groundWidth);
    const length1 = parseFloat(pipeLength1);
    const diameter1 = parseFloat(pipeDiameter1);
    const length2 = parseFloat(pipeLength2);
    const diameter2 = parseFloat(pipeDiameter2);

    // Check if all required fields have valid numbers
    if (
      isNaN(length) ||
      isNaN(width) ||
      (groundLength && isNaN(groundLen)) ||
      (groundWidth && isNaN(groundWid)) ||
      isNaN(length1) ||
      isNaN(diameter1) ||
      isNaN(length2) ||
      isNaN(diameter2)
    ) {
      setResult(null);
      return;
    }

    // Roof area calculation
    const roofArea = length * width; // in square meters

    // Ground area calculation
    const groundArea = groundLen * groundWid; // in square meters

    // Use ground area if available, otherwise use roof area
    const area = groundArea || roofArea;

    // Calculate runoff per hour
    const runoffPerHour = (area * RAINFALL_DATA.rainfallIntensity) / 1000; // cubic meters per hour

    // Calculate pipe capacity based on diameter
    const pipeCapacity = (diameter) => {
      const radius = diameter / 2000; // Convert diameter to meters and get radius
      const crossSectionalArea = Math.PI * Math.pow(radius, 2); // Cross-sectional area in square meters
      return (
        PIPE_CAPACITY *
        crossSectionalArea *
        RAINFALL_DATA.rainfallIntensityHourly
      ); // cubic meters per hour
    };

    const pipeCapacity1 = length1 * pipeCapacity(diameter1); // cubic meters per hour
    const pipeCapacity2 = length2 * pipeCapacity(diameter2); // cubic meters per hour

    // Check if system needs an upgrade based on pipe capacities
    const totalCapacity = pipeCapacity1 + pipeCapacity2;
    const isSufficient = totalCapacity >= runoffPerHour; // comparing hourly capacity with hourly runoff

    // Convert rainfall intensity to cubic meters per hour
    const rainfallIntensityCubicMetersPerHour =
      (RAINFALL_DATA.rainfallIntensity / 1000) * area;

    setResult({
      roofArea: roofArea || 0,
      groundArea: groundArea || "N/A",
      runoffPerHour: runoffPerHour || 0,
      intensity: RAINFALL_DATA.rainfallIntensity || 0,
      intensityCubicMeters: rainfallIntensityCubicMetersPerHour || 0,
      pipeCapacity1: pipeCapacity1 || 0,
      pipeCapacity2: pipeCapacity2 || 0,
      totalCapacity: totalCapacity || 0,
      isSufficient,
    });
  };

  useEffect(() => {
    calculate();
  }, [
    roofLength,
    roofWidth,
    groundLength,
    groundWidth,
    pipeLength1,
    pipeDiameter1,
    pipeLength2,
    pipeDiameter2,
  ]);

  return (
    <Box p={3}>
      <Typography variant="h6" gutterBottom>
        Stormwater Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Roof Length (m)"
            type="number"
            fullWidth
            value={roofLength}
            onChange={(e) => setRoofLength(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Roof Width (m)"
            type="number"
            fullWidth
            value={roofWidth}
            onChange={(e) => setRoofWidth(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Ground Length (m) (Optional)"
            type="number"
            fullWidth
            value={groundLength}
            onChange={(e) => setGroundLength(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Ground Width (m) (Optional)"
            type="number"
            fullWidth
            value={groundWidth}
            onChange={(e) => setGroundWidth(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Pipe Length 1 (m)"
            type="number"
            fullWidth
            value={pipeLength1}
            onChange={(e) => setPipeLength1(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Pipe Diameter 1 (mm)"
            type="number"
            fullWidth
            value={pipeDiameter1}
            onChange={(e) => setPipeDiameter1(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Pipe Length 2 (m)"
            type="number"
            fullWidth
            value={pipeLength2}
            onChange={(e) => setPipeLength2(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Pipe Diameter 2 (mm)"
            type="number"
            fullWidth
            value={pipeDiameter2}
            onChange={(e) => setPipeDiameter2(e.target.value)}
          />
        </Grid>
      </Grid>
      {result && (
        <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
          <Typography variant="h6">Results</Typography>
          <Typography>
            <strong>Roof Area:</strong> {result.roofArea.toFixed(2)} m²
          </Typography>
          <Typography>
            <strong>Ground Area:</strong> {result.groundArea} m²
          </Typography>
          <Typography>
            <strong>Runoff per Hour:</strong> {result.runoffPerHour.toFixed(2)}{" "}
            cubic meters
          </Typography>
          <Typography>
            <strong>Rainfall Intensity:</strong> {result.intensity} mm/hour
          </Typography>
          <Typography>
            <strong>Rainfall Intensity in Cubic Meters per Hour:</strong>{" "}
            {result.intensityCubicMeters.toFixed(2)} cubic meters
          </Typography>
          <Typography>
            <strong>Pipe Capacity 1:</strong> {result.pipeCapacity1.toFixed(2)}{" "}
            cubic meters per hour
          </Typography>
          <Typography>
            <strong>Pipe Capacity 2:</strong> {result.pipeCapacity2.toFixed(2)}{" "}
            cubic meters per hour
          </Typography>
          <Typography>
            <strong>Total Pipe Capacity:</strong>{" "}
            {result.totalCapacity.toFixed(2)} cubic meters per hour
          </Typography>
          <Typography color={result.isSufficient ? "green" : "error"}>
            {result.isSufficient
              ? "The combined capacity of the pipes is sufficient to handle the runoff."
              : "The combined capacity of the pipes may be insufficient to handle the runoff. Consider upgrading the system or adding additional components."}
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default StormwaterCalculator;
