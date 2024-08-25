import React from "react";
import { Container, Typography, Paper, Button, Box } from "@mui/material";

const CompliancePage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Downloadable Resources
      </Typography>

      <Paper elevation={3} style={{ padding: "32px", marginBottom: "32px" }}>
        <Typography variant="h5" gutterBottom>
          Compliance Guide
        </Typography>
        <Typography variant="body1" paragraph>
          QBCCs guide to notifiable work. Be sure you are compliant.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/docs/QBCCNotifiableWork.pdf" // Path to the PDF file
          target="_blank"
          rel="noopener"
          download
        >
          Notifiable Work QBCC
        </Button>
      </Paper>

      <Paper elevation={3} style={{ padding: "32px" }}>
        <Typography variant="h5" gutterBottom>
          Plumbing Forms
        </Typography>
        <Typography variant="body1" paragraph>
          Access and download the essential plumbing forms for your needs.
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          gap="16px" // Adjust the gap between buttons as needed
        >
          <Button
            variant="contained"
            color="primary"
            href="/docs/form1SCC.pdf" // Path to the PDF file
            target="_blank"
            rel="noopener"
            download
          >
            Form 1 Council | Plumbing, Drainage and Sewerage
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="/docs/plumbing-forms.pdf" // Path to the PDF file
            target="_blank"
            rel="noopener"
            download
          >
            Download Plumbing Forms
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="/docs/plumbing-forms.pdf" // Path to the PDF file
            target="_blank"
            rel="noopener"
            download
          >
            Download Plumbing Forms
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CompliancePage;
