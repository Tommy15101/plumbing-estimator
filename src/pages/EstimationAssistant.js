// src/EstimationAssistant.js

import React, { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { styled } from "@mui/system";
import jobTypes from "../data/jobTypesData"; // Adjust the path as needed
import useCart from "../hooks/useCart";
import usePDF from "../hooks/usePDF";

// Styled Components
const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  position: "relative",
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(1),
  justifyContent: "space-between",
}));

const EstimationAssistant = () => {
  const [jobType, setJobType] = useState("");
  const [jobNumber, setJobNumber] = useState("");
  const [jobNotes, setJobNotes] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const { handleDownloadPDF } = usePDF(jobType, jobNumber, jobNotes, cart);

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  const handleJobNumberChange = (event) => {
    setJobNumber(event.target.value);
  };

  const handleJobNotesChange = (event) => {
    setJobNotes(event.target.value);
  };

  const HandleClearAndCloseCart = () => {
    clearCart();
    setOpenModal(false);
  };

  const selectedJobType = jobTypes[jobType] || {};

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Estimation Assistant
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="job-type-label">Select Job Type</InputLabel>
            <Select
              labelId="job-type-label"
              value={jobType}
              onChange={handleJobTypeChange}
              label="Select Job Type"
            >
              {Object.keys(jobTypes).map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Job Number"
              variant="outlined"
              fullWidth
              value={jobNumber}
              onChange={handleJobNumberChange}
            />
            <TextField
              label="Job Notes / Description"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={jobNotes}
              onChange={handleJobNotesChange}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Material Ideas</Typography>
              {selectedJobType.materials?.map((material, index) => (
                <Button
                  key={index}
                  fullWidth
                  onClick={() => addToCart("materials", material)}
                >
                  {material}
                </Button>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Equipment Ideas</Typography>
              {selectedJobType.equipment?.map((equipment, index) => (
                <Button
                  key={index}
                  fullWidth
                  onClick={() => addToCart("equipment", equipment)}
                >
                  {equipment}
                </Button>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Reminders</Typography>
              {selectedJobType.reminders?.map((reminder, index) => (
                <Button
                  key={index}
                  fullWidth
                  onClick={() => addToCart("reminders", reminder)}
                >
                  {reminder}
                </Button>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Subcontractors</Typography>
              {selectedJobType.subcontractors?.map((subcontractor, index) => (
                <Button
                  key={index}
                  fullWidth
                  onClick={() => addToCart("subcontractors", subcontractor)}
                >
                  {subcontractor}
                </Button>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Clauses</Typography>
              {selectedJobType.clauses?.map((clause, index) => (
                <Button
                  key={index}
                  fullWidth
                  onClick={() => addToCart("clauses", clause)}
                >
                  {clause}
                </Button>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box marginTop={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenModal(true)}
        >
          View Cart
        </Button>
      </Box>

      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <StyledDialogTitle>
          Estimation Assistant
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setOpenModal(false)}
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </StyledDialogTitle>
        <StyledDialogContent>
          <Typography variant="h6">Job Details</Typography>
          {jobType && <Typography>Job Type: {jobType}</Typography>}
          {jobNumber && <Typography>Job Number: {jobNumber}</Typography>}
          {jobNotes && <Typography>Job Notes: {jobNotes}</Typography>}

          {Object.keys(cart).map((category) => (
            <Box key={category} marginBottom={2}>
              <Typography variant="h6">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Typography>
              {cart[category].length > 0 ? (
                <Box>
                  {cart[category].map((item, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      marginBottom={1}
                    >
                      <Typography>{item}</Typography>
                      <Button
                        size="small"
                        color="error"
                        onClick={() => removeFromCart(category, index)}
                        sx={{ marginLeft: 2 }}
                      >
                        Remove
                      </Button>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Typography>No items in this category.</Typography>
              )}
            </Box>
          ))}
        </StyledDialogContent>
        <StyledDialogActions>
          <Button onClick={() => HandleClearAndCloseCart()} color="secondary">
            Clear & Close Cart
          </Button>
          <Button onClick={handleDownloadPDF} color="primary">
            Download PDF
          </Button>
        </StyledDialogActions>
      </Dialog>
    </Container>
  );
};

export default EstimationAssistant;
