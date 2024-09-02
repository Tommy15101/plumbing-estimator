import React, { useState } from "react";
import { Box, Button, Typography, FormControl, TextField } from "@mui/material";

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

const ApplianceCurrentCalculator = () => {
  const [power, setPower] = useState("");
  const [result, setResult] = useState(null);
  const [resultColor, setResultColor] = useState("black");

  const calculateAmps = () => {
    if (!power) {
      setResult("Please enter the power rating of the appliance.");
      setResultColor("black");
      return;
    }

    const powerNumber = parseFloat(power);
    const voltage = 230; // Standard household voltage

    // Calculate the current draw
    const currentDraw = powerNumber / voltage;

    setResult(
      <>
        The appliance with a power rating of
        <Highlight color="green"> {powerNumber} Watts</Highlight> will draw
        <Highlight color="green"> {currentDraw.toFixed(2)} Amps</Highlight> at a
        standard voltage of
        <Highlight color="green"> {voltage}V</Highlight>.
      </>
    );
    setResultColor("green");
  };

  const resetCalculator = () => {
    setPower("");
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
        Appliance Current Draw Calculator
      </Typography>

      <Typography variant="body1" align="center" gutterBottom>
        Standard household voltage of 230V
      </Typography>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Appliance Power (Watts)"
          value={power}
          onChange={(e) => setPower(e.target.value)}
          type="number"
          variant="outlined"
        />
      </FormControl>

      <Box display="flex" justifyContent="center" marginTop={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={calculateAmps}
          style={{
            borderRadius: "8px",
            fontSize: "1.2rem",
          }}
        >
          Calculate
        </Button>
      </Box>

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

export default ApplianceCurrentCalculator;
