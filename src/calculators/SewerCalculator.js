import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  FormLabel,
} from "@mui/material";
import { styled } from "@mui/system";

// Define a Highlight component for conditional styling
const Highlight = ({ color, children }) => (
  <span style={{ color: color || "inherit", fontWeight: "bold" }}>
    {children}
  </span>
);

// Styled ToggleButton for custom styling
const CustomToggleButton = styled(ToggleButton)(({ selectedColor }) => ({
  "&.Mui-selected": {
    backgroundColor: selectedColor,
    color: "white",
    "&:hover": {
      backgroundColor: selectedColor,
    },
  },
}));

const DrainageCalculator = () => {
  const [trenchLength, setTrenchLength] = useState("");
  const [trenchWidth, setTrenchWidth] = useState("");
  const [trenchDepth, setTrenchDepth] = useState("");
  const [pipeDiameter, setPipeDiameter] = useState("");
  const [drainType, setDrainType] = useState("new");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (trenchLength && trenchWidth && trenchDepth && pipeDiameter) {
      calculateDrainage();
    }
  }, [trenchLength, trenchWidth, trenchDepth, pipeDiameter, drainType]);

  const calculateDrainage = () => {
    const length = parseFloat(trenchLength) / 1000;
    const width = parseFloat(trenchWidth) / 1000;
    const depth = parseFloat(trenchDepth) / 1000;
    const pipeRadius = parseFloat(pipeDiameter) / 2000;
    const blueMetalThickness = 0.075;

    const excavationVolume = length * width * depth;
    const blueMetalVolume = length * width * blueMetalThickness;
    const pipeVolume = length * Math.PI * pipeRadius ** 2;

    let remainingSpoilVolume;
    if (drainType === "new") {
      remainingSpoilVolume = blueMetalVolume + pipeVolume;
    } else if (drainType === "replacement") {
      remainingSpoilVolume = blueMetalVolume;
    }

    setResult({
      excavationVolume: excavationVolume.toFixed(2),
      blueMetalVolume: blueMetalVolume.toFixed(2),
      pipeVolume: pipeVolume.toFixed(2),
      remainingSpoilVolume: remainingSpoilVolume.toFixed(2),
    });
  };

  return (
    <Box padding={2} border={1} borderRadius={1} borderColor="grey.300">
      <Typography variant="h6" gutterBottom>
        Sewer Calculator
      </Typography>

      <FormControl fullWidth margin="normal">
        <FormLabel component="legend">Select Drain Type</FormLabel>
        <ToggleButtonGroup
          value={drainType}
          exclusive
          onChange={(e, newType) => setDrainType(newType)}
          aria-label="drain type"
          style={{ marginBottom: "16px" }}
        >
          <CustomToggleButton
            value="new"
            aria-label="new drain section"
            selectedColor="#4caf50" // Green for new drain section
          >
            New Drain Section
          </CustomToggleButton>
          <CustomToggleButton
            value="replacement"
            aria-label="replacement drain section"
            selectedColor="#f44336" // Red for replacement drain section
          >
            Replacement Drain Section
          </CustomToggleButton>
        </ToggleButtonGroup>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Trench Length (mm)"
          value={trenchLength}
          onChange={(e) => setTrenchLength(e.target.value)}
          type="number"
          variant="outlined"
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Trench Width (mm)"
          value={trenchWidth}
          onChange={(e) => setTrenchWidth(e.target.value)}
          type="number"
          variant="outlined"
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Trench Depth (mm)"
          value={trenchDepth}
          onChange={(e) => setTrenchDepth(e.target.value)}
          type="number"
          variant="outlined"
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Pipe Diameter (mm)"
          value={pipeDiameter}
          onChange={(e) => setPipeDiameter(e.target.value)}
          type="number"
          variant="outlined"
        />
      </FormControl>

      {result && (
        <Box marginTop={2}>
          <Typography variant="body1">
            Trench Length:{" "}
            <Highlight>{(trenchLength / 1000).toFixed(2)} m</Highlight>
          </Typography>
          <Typography variant="body1">
            Excavation Volume:{" "}
            <Highlight color="blue">{result.excavationVolume} m³</Highlight>
          </Typography>
          <Typography variant="body1">
            Blue Metal Volume (75mm):{" "}
            <Highlight color="green">{result.blueMetalVolume} m³</Highlight>
          </Typography>
          <Typography variant="body1">
            Pipe Volume:{" "}
            <Highlight color="purple">{result.pipeVolume} m³</Highlight>
          </Typography>
          <Typography variant="body1">
            Remaining Spoil Volume:{" "}
            <Highlight color="red">{result.remainingSpoilVolume} m³</Highlight>
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DrainageCalculator;
