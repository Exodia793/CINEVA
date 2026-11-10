import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@mui/material";
import { colors } from "../theme";

function HeroBanner({ movie }) {
  return (
    <Box
      sx={{
        border: `1px solid ${colors.border}`,
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "background.paper",
        mb: 4,
      }}
    >
      <Grid container>
        <Grid
          size={5}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="overline"
            color="text.secondary"
            sx={{ letterSpacing: 2 }}
          >
            FILM UNGGULAN
          </Typography>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {movie.year} · {movie.genre} · {movie.duration}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {movie.synopsis}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              component={Link}
              to={`/watch/${movie.id}`}
            >
              Tonton Trailer
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              component={Link}
              to={`/movie/${movie.id}`}
            >
              Lihat Detail
            </Button>
          </Box>
        </Grid>

        <Grid size={7}>
          <Box
            component="img"
            src={movie.banner}
            alt={movie.title}
            sx={{
              width: "100%",
              height: "100%",
              minHeight: 360,
              objectFit: "cover",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroBanner;
