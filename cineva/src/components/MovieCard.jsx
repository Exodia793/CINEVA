import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

function MovieCard({ movie }) {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <CardActionArea component={Link} to={`/movie/${movie.id}`}>
        <CardMedia
          component="img"
          image={movie.poster}
          alt={movie.title}
          sx={{ aspectRatio: "2 / 3", objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="subtitle1" fontWeight={600} noWrap>
            {movie.title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {movie.year} · {movie.genre}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;
