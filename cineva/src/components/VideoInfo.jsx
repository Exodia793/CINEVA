import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

function VideoInfo({ movie }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {movie.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {movie.year} · {movie.genre} · {movie.duration}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {movie.synopsis}
      </Typography>
      <Button
        variant="outlined"
        color="inherit"
        component={Link}
        to={`/movie/${movie.id}`}
      >
        Lihat Detail Film
      </Button>

      <Typography
        variant="caption"
        color="text.secondary"
        display="block"
        sx={{ mt: 3 }}
      >
        Trailer ditampilkan melalui pemutar resmi YouTube. Hak cipta trailer dan
        film milik pemiliknya masing-masing.
      </Typography>
    </Box>
  );
}

export default VideoInfo;
