import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  FormLabel,
  FormHelperText,
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

const StormwaterDrainageCalculator = () => {
  const [trenchLength, setTrenchLength] = useState("");
  const [trenchWidth, setTrenchWidth] = useState("");
  const [trenchDepth, setTrenchDepth] = useState("");
  const [pipeDiameter, setPipeDiameter] = useState("");
  const [drainType, setDrainType] = useState("new");
  const [useFillMaterial, setUseFillMaterial] = useState("excavated");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (trenchLength && trenchWidth && trenchDepth && pipeDiameter) {
      calculateDrainage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    trenchLength,
    trenchWidth,
    trenchDepth,
    pipeDiameter,
    drainType,
    useFillMaterial,
  ]);

  const calculateDrainage = () => {
    const length = parseFloat(trenchLength) / 1000;
    const width = parseFloat(trenchWidth) / 1000;
    const depth = parseFloat(trenchDepth) / 1000;
    const pipeRadius = parseFloat(pipeDiameter) / 2000;

    const pipeVolume = length * Math.PI * pipeRadius ** 2;
    const excavationVolume = length * width * depth;

    const blueMetalBottom = 0.1; // m
    const blueMetalTop = 0.1; // m

    // Correct Blue Metal Volumes
    const blueMetalBottomVolume = length * width * blueMetalBottom;
    const blueMetalTopVolume = length * width * blueMetalTop;

    const blueMetalTotalVolume = blueMetalBottomVolume + blueMetalTopVolume;

    let remainingSpoilVolume =
      excavationVolume - blueMetalTotalVolume - pipeVolume;

    let fillSandVolume = 0;
    if (useFillMaterial === "supplied") {
      fillSandVolume = remainingSpoilVolume;
    }

    setResult({
      excavationVolume: excavationVolume.toFixed(2),
      blueMetalVolume: blueMetalTotalVolume.toFixed(2),
      pipeVolume: pipeVolume.toFixed(2),
      remainingSpoilVolume: remainingSpoilVolume.toFixed(2),
      fillSandVolume: fillSandVolume.toFixed(2),
    });
  };

  return (
    <Box padding={2} border={1} borderRadius={1} borderColor="grey.300">
      <Typography variant="h6" gutterBottom>
        Stormwater Drainage Calculator
      </Typography>

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

      <FormControl fullWidth margin="normal">
        <FormLabel component="legend">Fill Material</FormLabel>
        <FormHelperText style={{ fontWeight: "bold" }}>
          AS3500.2 - Clause 5.5.2
        </FormHelperText>
        <FormHelperText style={{ fontStyle: "italic" }}>
          Excavated material from the trench may be suitable for final backfill,
          provided it is free from rock, hard matter and organic material, and
          broken up so that it does not contain soil lumps larger than 75mm.
        </FormHelperText>
        <ToggleButtonGroup
          value={useFillMaterial}
          exclusive
          onChange={(e, newType) => setUseFillMaterial(newType)}
          aria-label="fill material"
          style={{ marginBottom: "16px" }}
        >
          <CustomToggleButton
            value="excavated"
            aria-label="use excavated soil as fill"
            selectedColor="#4caf50" // Blue for using excavated soil
          >
            Use Excavated Soil as Fill
          </CustomToggleButton>
          <CustomToggleButton
            value="supplied"
            aria-label="supply fill material"
            selectedColor="#4caf50" // Orange for supplying fill material
          >
            Supply Fill Material
          </CustomToggleButton>
        </ToggleButtonGroup>
      </FormControl>

      {result && (
        <Box marginTop={2}>
          <Typography variant="body1">
            Trench Length:{" "}
            <Highlight>{(trenchLength / 1000).toFixed(2)} m</Highlight>
          </Typography>
          <Typography variant="body1">
            Geotextile Fabric:{" "}
            <Highlight color="orange">
              {((trenchLength * 2) / 1000).toFixed(2)} m
            </Highlight>
          </Typography>
          <Typography variant="body1">
            Excavation Volume:{" "}
            <Highlight color="blue">{result.excavationVolume} m³</Highlight>
          </Typography>
          <Typography variant="body1">
            Blue Metal Volume:{" "}
            <Highlight color="green">{result.blueMetalVolume} m³</Highlight>
          </Typography>
          <Typography variant="body1">
            Pipe Volume:{" "}
            <Highlight color="purple">{result.pipeVolume} m³</Highlight>
          </Typography>
          {useFillMaterial === "supplied" && (
            <Typography variant="body1">
              Fill Sand Volume:{" "}
              <Highlight color="orange">{result.fillSandVolume} m³</Highlight>
            </Typography>
          )}
          <Typography variant="body1">
            Remaining Spoil Volume:{" "}
            <Highlight color="red">{result.remainingSpoilVolume} m³</Highlight>
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default StormwaterDrainageCalculator;
