import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Paper,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

// Fixture units data based on AS3500.2 standards (example values)
const FIXTURE_UNITS = {
  Toilet: 6,
  Sink: 1,
  Shower: 2,
  Bidet: 2,
  "Washing Machine": 3,
  Dishwasher: 2,
};

// Pipe sizing details (example values, adjust according to AS3500.2)
const PIPE_SIZING = {
  "50 mm": { grade: "1:50", maxDistance: "2 meters" },
  "75 mm": { grade: "1:100", maxDistance: "3 meters" },
  "100 mm": { grade: "1:100", maxDistance: "5 meters" },
  "150 mm": { grade: "1:150", maxDistance: "10 meters" },
};

const FixtureCalculator = () => {
  const [fixtures, setFixtures] = useState([]);
  const [pipeSize, setPipeSize] = useState("");
  const [result, setResult] = useState(null);

  const handleFixtureChange = (e) => {
    const { value, checked } = e.target;
    setFixtures((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const calculate = () => {
    let totalFixtureUnits = fixtures.reduce(
      (sum, fixture) => sum + FIXTURE_UNITS[fixture],
      0
    );

    // Determine pipe size based on total fixture units (example logic, adjust as needed)
    let selectedPipeSize = "";
    if (totalFixtureUnits <= 6) selectedPipeSize = "50 mm";
    else if (totalFixtureUnits <= 12) selectedPipeSize = "75 mm";
    else if (totalFixtureUnits <= 20) selectedPipeSize = "100 mm";
    else selectedPipeSize = "150 mm";

    setPipeSize(selectedPipeSize);

    setResult({
      totalFixtureUnits,
      pipeSize: selectedPipeSize,
      ...PIPE_SIZING[selectedPipeSize],
    });
  };

  return (
    <Box p={3}>
      <Typography variant="h6" gutterBottom>
        Fixture Unit Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Select Fixtures:</Typography>
          {Object.keys(FIXTURE_UNITS).map((fixture) => (
            <FormControl key={fixture} component="fieldset" variant="standard">
              <InputLabel>{fixture}</InputLabel>
              <Select
                multiple
                value={fixtures}
                onChange={handleFixtureChange}
                renderValue={(selected) => selected.join(", ")}
                fullWidth
              >
                <MenuItem value={fixture}>{fixture}</MenuItem>
              </Select>
            </FormControl>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Pipe Size:
          </Typography>
          <TextField
            select
            label="Pipe Size"
            fullWidth
            value={pipeSize}
            onChange={(e) => setPipeSize(e.target.value)}
          >
            {Object.keys(PIPE_SIZING).map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <button onClick={calculate}>Calculate</button>
        </Grid>
      </Grid>
      {result && (
        <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
          <Typography variant="h6">Results</Typography>
          <Typography>
            <strong>Total Fixture Units:</strong> {result.totalFixtureUnits}
          </Typography>
          <Typography>
            <strong>Pipe Size:</strong> {result.pipeSize}
          </Typography>
          <Typography>
            <strong>Grade:</strong> {result.grade}
          </Typography>
          <Typography>
            <strong>Maximum Distance from Fixture to Trap:</strong>{" "}
            {result.maxDistance}
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default FixtureCalculator;
