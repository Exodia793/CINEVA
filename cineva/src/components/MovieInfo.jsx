import { Box, Typography, Chip } from "@mui/material";

function MovieInfo({ movie }) {
  return (
    <Box>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        {movie.title}
      </Typography>

      <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
        <Chip label={movie.year} variant="outlined" />
        <Chip label={movie.genre} variant="outlined" />
        <Chip label={movie.duration} variant="outlined" />
      </Box>

      <Typography
        variant="overline"
        color="text.secondary"
        sx={{ letterSpacing: 2 }}
      >
        SINOPSIS
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {movie.synopsis}
      </Typography>

      <Typography
        variant="overline"
        color="text.secondary"
        sx={{ letterSpacing: 2 }}
      >
        SUTRADARA
      </Typography>
      <Typography variant="body1">{movie.director}</Typography>
    </Box>
  );
}

export default MovieInfo;
