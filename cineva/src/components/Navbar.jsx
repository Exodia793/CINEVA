import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { colors } from "../theme";
import { APP_NAME, APP_TAGLINE } from "../constants";

const menus = [
  { label: "Beranda", to: "/" },
  { label: "Cari", to: "/search" },
  { label: "Watchlist", to: "/watchlist" },
];

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: colors.navbar,
        backgroundImage: "none",
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            component={NavLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                fontWeight: 700,
                letterSpacing: 3,
                lineHeight: 1.1,
              }}
            >
              {APP_NAME}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                letterSpacing: 1.5,
                fontSize: "0.6rem",
              }}
            >
              {APP_TAGLINE}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            {menus.map((m) => (
              <Button
                key={m.to}
                color="inherit"
                component={NavLink}
                to={m.to}
                sx={{
                  color: "text.secondary",
                  borderRadius: 0,
                  borderBottom: "2px solid transparent",
                  "&.active": {
                    color: "text.primary",
                    borderBottomColor: colors.accent,
                  },
                }}
              >
                {m.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
