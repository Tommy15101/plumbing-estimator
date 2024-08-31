import React, { useState, useEffect } from "react";
import { Box, Button, Typography, FormControl } from "@mui/material";

// Define a Highlight component for conditional styling
const Highlight = ({ color, children }) => (
  <span style={{ color: color || "inherit", fontWeight: "bold" }}>
    {children}
  </span>
);

// Define a StyledButton component for custom button styling
const StyledButton = (props) => (
  <Button
    variant="contained"
    {...props}
    style={{
      minWidth: "80px", // Set a minimum width for uniform button size
      fontSize: "1.2rem", // Increase font size for better visibility
      borderRadius: "8px", // Rounded corners for a modern look
      margin: "8px", // Space between buttons
      backgroundColor: props.selected ? "#1976d2" : "#f5f5f5", // Primary color for selected, light grey for others
      color: props.selected ? "white" : "#333", // White text for selected, dark text for others
      boxShadow: props.selected ? "0px 3px 5px rgba(0, 0, 0, 0.2)" : "none", // Shadow for selected buttons
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

  const resetCalculator = () => {
    setCircuitBreakerRating(null);
    setHotWaterPower(null);
    setResult(null);
    setResultColor("black");
  };

  return (
    <Box
      padding={3}
      border={1}
      borderRadius={2}
      borderColor="grey.300"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      maxWidth={400}
      mx="auto"
      bgcolor="#fafafa"
    >
      <Typography variant="h6" gutterBottom align="center">
        Hot Water System Compatibility Calculator
      </Typography>

      <Typography variant="body1" align="center" gutterBottom>
        Standard household voltage of 230V
      </Typography>

      <FormControl fullWidth margin="normal">
        <Typography variant="subtitle1" gutterBottom>
          Circuit Breaker Rating (Amps)
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {[10, 15, 20].map((rating) => (
            <StyledButton
              key={rating}
              selected={circuitBreakerRating === rating}
              onClick={() => handleCircuitBreakerChange(rating)}
            >
              {rating}
            </StyledButton>
          ))}
        </Box>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <Typography variant="subtitle1" gutterBottom>
          Hot Water System Power (Watts)
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {[1200, 2400, 3600].map((power) => (
            <StyledButton
              key={power}
              selected={hotWaterPower === power}
              onClick={() => handleHotWaterPowerChange(power)}
            >
              {power}
            </StyledButton>
          ))}
        </Box>
      </FormControl>

      {result && (
        <Box marginTop={3}>
          <Typography
            variant="body1"
            align="center"
            style={{ color: resultColor }}
          >
            {result}
          </Typography>
        </Box>
      )}

      {/* Reset Button */}
      <Box display="flex" justifyContent="center" marginTop={3}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={resetCalculator}
          style={{
            borderRadius: "8px",
            fontSize: "1.1rem",
          }}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default HotWaterSystemCalculator;
