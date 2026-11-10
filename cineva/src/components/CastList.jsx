import { Box, Typography, Chip } from "@mui/material";

function CastList({ cast }) {
  return (
    <Box>
      <Typography
        variant="overline"
        color="text.secondary"
        sx={{ letterSpacing: 2 }}
      >
        PEMERAN
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
        {cast.map((name) => (
          <Chip key={name} label={name} />
        ))}
      </Box>
    </Box>
  );
}

export default CastList;
