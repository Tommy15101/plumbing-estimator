import { createTheme } from "@mui/material/styles";

// Define your color palette
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3", // Blue
      light: "#64B5F6", // Light Blue
      dark: "#1976D2", // Darker Blue
      contrastText: "#fff", // White text on blue
    },
    secondary: {
      main: "#9E9E9E", // Grey
      light: "#BDBDBD", // Light Grey
      dark: "#616161", // Darker Grey
      contrastText: "#000", // Black text on grey
    },
    background: {
      default: "#f5f5f5", // Light Grey Background
      paper: "#ffffff", // White Background for paper components
    },
  },
  typography: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
  },
  components: {
    // Customize MUI components here if needed
  },
});

export default theme;
