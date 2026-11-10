import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import MoviePoster from "../components/MoviePoster";
import MovieInfo from "../components/MovieInfo";
import CastList from "../components/CastList";
import FavoriteButton from "../components/FavoriteButton";
import movies from "../data/movies";
import { useWatchlist } from "../context/WatchlistContext";
import { useAuth } from "../context/AuthContext";

function MovieDetail() {
  const { id } = useParams();
  const movieDetail = movies.find((m) => m.id === Number(id));
  const { isFavorite, onAddFavorite, onRemoveFavorite } = useWatchlist();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!movieDetail) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h5" gutterBottom>
          Film tidak ditemukan
        </Typography>
        <Button variant="outlined" color="inherit" component={Link} to="/">
          Kembali ke Beranda
        </Button>
      </Container>
    );
  }

  const favorite = isFavorite(movieDetail.id);

  const handleToggle = () => {
    if (!user) {
      navigate("/login", { state: { from: location } });
      return;
    }

    if (favorite) {
      onRemoveFavorite(movieDetail.id);
    } else {
      onAddFavorite(movieDetail.id);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid size={4}>
          <MoviePoster movie={movieDetail} />
        </Grid>

        <Grid size={8}>
          <MovieInfo movie={movieDetail} />

          <Box sx={{ mt: 3 }}>
            <CastList cast={movieDetail.cast} />
          </Box>

          <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
            <Button
              variant="contained"
              component={Link}
              to={`/watch/${movieDetail.id}`}
            >
              Tonton Trailer
            </Button>
            <FavoriteButton isFavorite={favorite} onToggle={handleToggle} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MovieDetail;
