// src/PitRequirementsCalculator.js

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const StormwaterPitCalculator = () => {
  const [area, setArea] = useState("");
  const [annualRainfall, setAnnualRainfall] = useState("");
  const [groundType, setGroundType] = useState("concrete");
  const [pitVolume, setPitVolume] = useState(0.5);
  const [result, setResult] = useState(null);

  const calculatePitRequirements = () => {
    // Define runoff coefficients based on ground type
    const runoffCoefficients = {
      concrete: 0.8,
      clay: 0.5,
      grass: 0.4,
    };

    const C = runoffCoefficients[groundType] || 0.5;
    // Convert annual rainfall (mm) to a suitable intensity unit (e.g., m³/s/m²)
    const I = annualRainfall / 1000 / (365 * 24 * 3600); // Simplified intensity conversion
    const Q = C * I * area; // Flow rate in m³/s
    const T = 1800; // Time period (e.g., 30 minutes)
    const V_total = Q * T; // Total volume in cubic meters
    const numberOfPits = Math.ceil(V_total / pitVolume);

    setResult({
      requiredPitVolume: V_total.toFixed(2),
      numberOfPits,
    });
  };

  return (
    <Box padding={2} border={1} borderRadius={1} borderColor="grey.300">
      <Typography variant="h6" gutterBottom>
        Pit Requirements Calculator
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Area (m²)"
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Average Annual Rainfall (mm)"
          type="number"
          value={annualRainfall}
          onChange={(e) => setAnnualRainfall(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Ground Type</InputLabel>
        <Select
          value={groundType}
          onChange={(e) => setGroundType(e.target.value)}
        >
          <MenuItem value="concrete">Concrete</MenuItem>
          <MenuItem value="clay">Clay</MenuItem>
          <MenuItem value="grass">Grass</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Pit Volume (m³)"
          type="number"
          step="0.01"
          value={pitVolume}
          onChange={(e) => setPitVolume(e.target.value)}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={calculatePitRequirements}
      >
        Calculate
      </Button>
      {result && (
        <Box marginTop={2}>
          <Typography variant="body1">
            Required Pit Volume: {result.requiredPitVolume} m³
          </Typography>
          <Typography variant="body1">
            Number of Pits Required: {result.numberOfPits}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default StormwaterPitCalculator;
