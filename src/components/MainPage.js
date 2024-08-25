import React from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <Container>
      {/* Hero Section */}
      <Paper
        elevation={3}
        style={{ padding: "32px", marginBottom: "32px", textAlign: "center" }}
      >
        <Typography variant="h2" gutterBottom>
          Plumbing Estimator
        </Typography>
        <Typography variant="h5">
          Your go-to tool for efficient plumbing estimation
        </Typography>
      </Paper>

      {/* Navigation Buttons */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginBottom: "32px" }}
      >
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <a
            href="https://www.reece.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Button variant="contained" color="primary" fullWidth>
              Reece Max
            </Button>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <a
            href="https://go.servicem8.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Button variant="contained" color="primary" fullWidth>
              Service m8
            </Button>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <a
            href="https://outlook.office.com/mail/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Button variant="contained" color="primary" fullWidth>
              Outlook Mail
            </Button>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <a
            href="https://www.example4.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Button variant="contained" color="primary" fullWidth>
              Link 4
            </Button>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <a
            href="https://www.example5.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Button variant="contained" color="primary" fullWidth>
              Link 5
            </Button>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <a
            href="https://www.example6.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Button variant="contained" color="primary" fullWidth>
              Link 6
            </Button>
          </a>
        </Grid>
      </Grid>

      {/* Cards Section */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Estimation Assistant</Typography>
              <Typography variant="body2">
                An Assistant For Correct Materials, Equipment, Clauses and more.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                component={Link}
                to="/estimation-assistant"
              >
                Estimate Now!
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Resources</Typography>
              <Typography variant="body2">
                Downlaod saved templates for Job Scoping, Sales Strategies and
                more.{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                component={Link}
                to="/downloads"
              >
                Get Resourceful Now!
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Tools</Typography>
              <Typography variant="body2">
                Tools for estimating such as Volume Calculators and more.{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" component={Link} to="/tools">
                Get To Work now!
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Compliance Docs</Typography>
              <Typography variant="body2">
                Sunshine Coast Council & Unity Water Information and Downloads.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                component={Link}
                to="/compliance"
              >
                Get Compliant Now!
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
