import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

// Pipe data with ratios
const PIPE_GRADES = {
  "40 mm": 40,
  "50 mm": 40,
  "65 mm": 40,
  "80 mm": 60,
  "100 mm": 60,
  "125 mm": 80,
  "150 mm": 100,
  "225 mm": 150,
  "300 mm": 250,
};

const GradeCalculator = () => {
  const [pipeSize, setPipeSize] = useState("");
  const [length, setLength] = useState("");
  const [fall, setFall] = useState(null);

  useEffect(() => {
    const calculateFall = () => {
      const size = pipeSize;
      const pipeLength = parseFloat(length);

      if (!PIPE_GRADES[size] || isNaN(pipeLength)) {
        setFall(null);
        return;
      }

      const ratio = PIPE_GRADES[size];
      const fallPerMeter = 1000 / ratio; // Convert ratio to fall per meter in mm
      const totalFall = fallPerMeter * pipeLength;

      setFall(totalFall.toFixed(2));
    };

    calculateFall();
  }, [pipeSize, length]); // Recalculate when pipeSize or length changes

  return (
    <Box p={3}>
      <Typography variant="h6" gutterBottom>
        Pipe Grade Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Pipe Size</InputLabel>
            <Select
              value={pipeSize}
              onChange={(e) => setPipeSize(e.target.value)}
              label="Pipe Size"
            >
              {Object.keys(PIPE_GRADES).map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Length of Run (m)"
            type="number"
            fullWidth
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </Grid>
      </Grid>
      {fall !== null && (
        <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
          <Typography variant="h6">Results</Typography>
          <Typography>
            <strong>Total Fall Required:</strong> {fall} mm
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default GradeCalculator;
