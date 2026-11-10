import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";

function WatchlistItem({ movie, onRemoveFavorite }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        p: 2,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <Box
        component="img"
        src={movie.poster}
        alt={movie.title}
        sx={{
          width: 90,
          aspectRatio: "2 / 3",
          objectFit: "cover",
          borderRadius: 1,
        }}
      />

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={600}>
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {movie.year} · {movie.genre} · {movie.duration}
        </Typography>

        <Box sx={{ display: "flex", gap: 1.5, mt: 2 }}>
          <Button
            size="small"
            variant="contained"
            component={Link}
            to={`/watch/${movie.id}`}
          >
            Tonton Trailer
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="inherit"
            component={Link}
            to={`/movie/${movie.id}`}
          >
            Detail
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="inherit"
            startIcon={<DeleteOutlineIcon />}
            onClick={() => onRemoveFavorite(movie.id)}
          >
            Hapus
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default WatchlistItem;
