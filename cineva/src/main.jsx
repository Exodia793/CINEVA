import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import WatchlistPage from "./pages/Watchlistpage.jsx";
import { WatchlistProvider } from "./context/WatchlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WatchlistProvider>
          <App />
        </WatchlistProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
