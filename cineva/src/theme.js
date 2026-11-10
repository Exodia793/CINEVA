import { createTheme } from "@mui/material/styles";

// Palet "Contemporary Graphite"
export const colors = {
  background: "#20211F",
  navbar: "#191A18",
  card: "#343631",
  accent: "#66685B",
  border: "#45463F",
  textPrimary: "#EAE8E0",
  textSecondary: "#C9C6B9",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: colors.accent, contrastText: colors.textPrimary },
    background: { default: colors.background, paper: colors.card },
    text: { primary: colors.textPrimary, secondary: colors.textSecondary },
    divider: colors.border,
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", sans-serif',
  },
  shape: { borderRadius: 8 },
});

export default theme;
