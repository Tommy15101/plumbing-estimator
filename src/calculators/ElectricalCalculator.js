// src/HotWaterSystemCalculator.js

import React, { useState, useEffect } from "react";
import { Box, Button, Typography, FormControl } from "@mui/material";

// Define a Highlight component for conditional styling
const Highlight = ({ color, children }) => (
  <span style={{ color: color || "inherit" }}>{children}</span>
);

// Define a StyledButton component for custom button styling
const StyledButton = (props) => (
  <Button
    variant="contained"
    {...props}
    style={{
      minWidth: "60px", // Set a minimum width for uniform button size
      fontSize: "1.2rem", // Increase font size for better visibility
      borderRadius: "8px", // Rounded corners for a modern look
      margin: "4px", // Space between buttons
    }}
  />
);

const HotWaterSystemCalculator = () => {
  const [circuitBreakerRating, setCircuitBreakerRating] = useState(null);
  const [hotWaterPower, setHotWaterPower] = useState(null);
  const [result, setResult] = useState(null);
  const [resultColor, setResultColor] = useState("black");

  useEffect(() => {
    // Automatically calculate when either circuit breaker rating or hot water power changes
    if (circuitBreakerRating !== null && hotWaterPower !== null) {
      calculateCompatibility();
    }
  }, [circuitBreakerRating, hotWaterPower]);

  const handleCircuitBreakerChange = (value) => {
    setCircuitBreakerRating(value);
  };

  const handleHotWaterPowerChange = (value) => {
    setHotWaterPower(value);
  };

  const calculateCompatibility = () => {
    if (circuitBreakerRating === null || hotWaterPower === null) {
      setResult(
        "Please select both circuit breaker rating and hot water power."
      );
      setResultColor("black");
      return;
    }

    const breakerRating = parseFloat(circuitBreakerRating);
    const hotWaterPowerNumber = parseFloat(hotWaterPower);
    const voltageNumber = 230; // Standard household voltage

    // Calculate the current draw of the hot water system
    const currentDraw = hotWaterPowerNumber / voltageNumber;

    // Check if the circuit breaker can handle the load
    if (currentDraw > breakerRating) {
      setResult(
        <>
          The hot water system requires
          <Highlight color="red"> {currentDraw.toFixed(2)} Amps</Highlight>,
          which exceeds the circuit breaker rating of
          <Highlight color="red"> {breakerRating} Amps</Highlight>. Consider
          upgrading the breaker.
        </>
      );
      setResultColor("red");
    } else {
      setResult(
        <>
          The hot water system requires
          <Highlight color="green"> {currentDraw.toFixed(2)} Amps</Highlight>,
          which is within the circuit breaker rating of
          <Highlight color="green"> {breakerRating} Amps</Highlight>. The
          existing breaker is sufficient.
        </>
      );
      setResultColor("green");
    }
  };

  return (
    <Box padding={2} border={1} borderRadius={1} borderColor="grey.300">
      <Typography variant="h6" gutterBottom>
        Hot Water System Compatibility Calculator
      </Typography>

      <Typography variant="body1">
        Standard household voltage of 230V
      </Typography>

      <FormControl fullWidth margin="normal">
        <Typography variant="subtitle1">
          Circuit Breaker Rating (Amps)
        </Typography>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          {[10, 15, 20].map((rating) => (
            <StyledButton
              key={rating}
              color={circuitBreakerRating === rating ? "primary" : "secondary"}
              onClick={() => handleCircuitBreakerChange(rating)}
            >
              {rating}
            </StyledButton>
          ))}
        </Box>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <Typography variant="subtitle1">
          Hot Water System Power (Watts)
        </Typography>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          {[1200, 2400, 3600].map((power) => (
            <StyledButton
              key={power}
              color={hotWaterPower === power ? "primary" : "secondary"}
              onClick={() => handleHotWaterPowerChange(power)}
            >
              {power}
            </StyledButton>
          ))}
        </Box>
      </FormControl>

      {result && (
        <Box marginTop={2}>
          <Typography variant="body1" style={{ color: resultColor }}>
            {result}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default HotWaterSystemCalculator;
