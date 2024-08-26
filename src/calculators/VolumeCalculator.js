// src/VolumeCalculator.js

import React, { useState } from "react";
import { Typography, TextField, Button, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const VolumeCalculator = () => {
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

  return (
    <>
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
    </>
  );
};

export default VolumeCalculator;
