import { styled } from "@mui/system";
import {
  Box,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tab,
} from "@mui/material";

export const TabContainer = styled(Box)(({ theme }) => ({
  borderBottom: `4px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.paper,
}));

export const StyledTab = styled(Tab)(({ theme, isSelected }) => ({
  textTransform: "none",
  color: theme.palette.text.primary,
  borderBottom: isSelected ? `2px solid ${theme.palette.primary.main}` : "none",
  backgroundColor: isSelected ? theme.palette.action.selected : "transparent",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  padding: theme.spacing(2),
  transition: "background-color 0.3s ease",
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  marginTop: theme.spacing(-1),
  backgroundColor: theme.palette.background.paper,
}));

// Styled Components from original
export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  position: "relative",
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(1),
  justifyContent: "space-between",
}));

export const ClearButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.error.main,
  backgroundColor: theme.palette.common.white,
  borderRadius: "50%",
  padding: "4px",
  marginLeft: "8px", // Margin to the left
  minWidth: 24,
  minHeight: 24,
  "&:hover": {
    backgroundColor: theme.palette.error.main, // Red background on hover
    color: theme.palette.common.white, // White text/icon on hover
  },
  "& svg": {
    fontSize: 16,
  },
}));
