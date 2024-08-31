import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Tabs,
  Card,
  CardContent,
  Grid,
  Button,
  Dialog,
  TextField,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";
import {
  TabContainer,
  StyledTab,
  ContentContainer,
  StyledDialogActions,
  StyledDialogTitle,
  StyledDialogContent,
  ClearButton,
} from "../styles/EstimationAssistantTesting";
import {
  Add as AddIcon,
  Close as CloseIcon,
  Edit as EditIcon,
  Clear as ClearIcon,
} from "@mui/icons-material";
// import { styled } from "@mui/system";
import jobTypes from "../data/jobTypesData"; // Ensure correct path
import useCart from "../hooks/useCart";
import usePDF from "../hooks/usePDF";

// STATE MANAGEMENT //
const EstimationAssistantTesting = () => {
  const [tabs, setTabs] = useState([
    {
      name: "Job 1",
      data: { jobType: "", systemType: "", jobNumber: "", jobNotes: "" },
    },
  ]);
  const [currentTab, setCurrentTab] = useState(0);
  const [newJobName, setNewJobName] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const { cart, toggleItemInCart, removeFromCart, clearCart } = useCart();
  const { handleDownloadPDF } = usePDF(
    tabs[currentTab]?.data?.jobType || "",
    tabs[currentTab]?.data?.jobNumber || "",
    tabs[currentTab]?.data?.jobNotes || "",
    cart
  );

  useEffect(() => {
    console.log("Current Tabs:", tabs);
    console.log("Current Tab Index:", currentTab);
    console.log(
      "Selected Job Type Data:",
      tabs[currentTab]?.data?.jobType
        ? jobTypes[tabs[currentTab]?.data?.jobType]
        : {}
    );
  }, [tabs, currentTab]);

  const isItemInCart = (category, item) => cart[category]?.includes(item);

  const handleClearJobNumberField = () => {
    setTabs((prevTabs) =>
      prevTabs.map((tab, index) =>
        index === currentTab
          ? { ...tab, data: { ...tab.data, jobNumber: "" } }
          : tab
      )
    );
  };

  const handleClearNotesField = () => {
    setTabs((prevTabs) =>
      prevTabs.map((tab, index) =>
        index === currentTab
          ? { ...tab, data: { ...tab.data, jobNotes: "" } }
          : tab
      )
    );
  };

  const HandleClearAndCloseCart = () => {
    clearCart();
    setOpenModal(false);
  };

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleAddJob = () => {
    const newJobName = `Job ${tabs.length + 1}`;
    setTabs([
      ...tabs,
      {
        name: newJobName,
        data: { jobType: "", systemType: "", jobNumber: "", jobNotes: "" },
      },
    ]);
    setCurrentTab(tabs.length);
  };

  const handleEditJob = (index) => {
    setNewJobName(tabs[index].name);
    // Set index in state if you need to handle edit logic
  };

  const handleDeleteTab = (index) => {
    setTabs(tabs.filter((_, i) => i !== index));
    if (currentTab === index) {
      setCurrentTab((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  const handleJobTypeChange = (event) => {
    const selectedJobType = event.target.value;
    setTabs(
      tabs.map((tab, index) =>
        index === currentTab
          ? {
              ...tab,
              name: selectedJobType,
              data: { ...tab.data, jobType: selectedJobType },
            }
          : tab
      )
    );
  };

  const handleSystemTypeChange = (event) => {
    const selectedSystemType = event.target.value;
    setTabs(
      tabs.map((tab, index) =>
        index === currentTab
          ? { ...tab, data: { ...tab.data, systemType: selectedSystemType } }
          : tab
      )
    );
  };

  const handleJobNumberChange = (event) => {
    const jobNumber = event.target.value;
    setTabs(
      tabs.map((tab, index) =>
        index === currentTab
          ? { ...tab, data: { ...tab.data, jobNumber: jobNumber } }
          : tab
      )
    );
  };

  const handleJobNotesChange = (event) => {
    const jobNotes = event.target.value;
    setTabs(
      tabs.map((tab, index) =>
        index === currentTab
          ? { ...tab, data: { ...tab.data, jobNotes: jobNotes } }
          : tab
      )
    );
  };

  // Access the data for the active tab
  const { jobType, jobNumber, jobNotes } = tabs[currentTab].data;

  const selectedJobType = tabs[currentTab]?.data?.jobType
    ? jobTypes[tabs[currentTab]?.data?.jobType]
    : {};
  const selectedSystemType = tabs[currentTab]?.data?.systemType
    ? selectedJobType[tabs[currentTab]?.data?.systemType] || {}
    : {};

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Estimation Assistant
      </Typography>

      <TabContainer>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          aria-label="job tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab, index) => (
            <StyledTab
              key={index}
              label={
                <Box display="flex" alignItems="center">
                  {tab.name}
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditJob(index);
                    }}
                    sx={{ marginLeft: 1 }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteTab(index);
                    }}
                    sx={{ marginLeft: 1 }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              }
              isSelected={currentTab === index}
            />
          ))}
          <StyledTab
            label={
              <Button
                variant="contained"
                onClick={handleAddJob}
                startIcon={<AddIcon />}
              >
                Add Job
              </Button>
            }
            isSelected={false}
            sx={{ borderBottom: "none" }}
          />
        </Tabs>
      </TabContainer>

      {tabs[currentTab] && (
        <ContentContainer>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="job-type-label">Select Job Type</InputLabel>
                <Select
                  labelId="job-type-label"
                  value={tabs[currentTab]?.data?.jobType || ""}
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
              <FormControl fullWidth margin="normal">
                <InputLabel id="system-type-label">
                  Select System Type
                </InputLabel>
                <Select
                  labelId="system-type-label"
                  value={tabs[currentTab]?.data?.systemType || ""}
                  onChange={handleSystemTypeChange}
                  label="Select System Type"
                >
                  {Object.keys(selectedJobType).map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <TextField
                label="Job Number"
                variant="outlined"
                fullWidth
                value={tabs[currentTab]?.data?.jobNumber || ""}
                onChange={handleJobNumberChange}
              />
              <ClearButton onClick={handleClearJobNumberField}>
                <ClearIcon />
              </ClearButton>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Job Notes"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={tabs[currentTab]?.data?.jobNotes || ""}
                onChange={handleJobNotesChange}
              />
              <ClearButton onClick={handleClearNotesField}>
                <ClearIcon />
              </ClearButton>
            </Grid>
          </Grid>

          <Box marginTop={2}>
            <Grid container spacing={2} marginTop={2}>
              {[
                "materials",
                "equipment",
                "reminders",
                "subcontractors",
                "Time Optimizer",
                "clauses",
              ].map(
                (category) =>
                  selectedSystemType[category]?.length > 0 && (
                    <Grid item xs={12} md={4} key={category}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6">
                            {category.charAt(0).toUpperCase() +
                              category.slice(1)}
                          </Typography>
                          {selectedSystemType[category].map((item, index) => (
                            <Box
                              key={index}
                              display="flex"
                              alignItems="center"
                              marginBottom={1}
                            >
                              <Button
                                fullWidth
                                onClick={() => toggleItemInCart(category, item)}
                                variant={
                                  isItemInCart(category, item)
                                    ? "outlined"
                                    : "contained"
                                }
                              >
                                {item}
                              </Button>
                              {isItemInCart(category, item) && (
                                <Chip
                                  label="Added"
                                  color="success"
                                  size="small"
                                  sx={{ marginLeft: 1 }}
                                />
                              )}
                            </Box>
                          ))}
                        </CardContent>
                      </Card>
                    </Grid>
                  )
              )}
            </Grid>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenModal(true)}
            sx={{ marginTop: 2 }}
          >
            View Cart
          </Button>
        </ContentContainer>
      )}

      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <StyledDialogTitle>Cart Summary</StyledDialogTitle>
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

export default EstimationAssistantTesting;
