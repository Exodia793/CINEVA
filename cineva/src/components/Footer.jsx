import { Box, Typography } from "@mui/material";
import { colors } from "../theme";
import { APP_NAME, APP_TAGLINE } from "../constants";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: "center",
        bgcolor: colors.navbar,
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      <Typography variant="subtitle2" sx={{ letterSpacing: 3 }}>
        {APP_NAME}
      </Typography>
      <Typography variant="caption" color="text.secondary" display="block">
        {APP_TAGLINE}
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        display="block"
        sx={{ mt: 1 }}
      >
        © 2026 · Project UTS Exelance
      </Typography>
    </Box>
  );
}

export default Footer;
