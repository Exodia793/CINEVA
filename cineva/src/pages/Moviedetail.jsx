import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import MoviePoster from "../components/MoviePoster";
import MovieInfo from "../components/MovieInfo";
import CastList from "../components/CastList";
import FavoriteButton from "../components/FavoriteButton";
import movies from "../data/movies";

function MovieDetail() {
  const { id } = useParams();
  const movieDetail = movies.find((m) => m.id === Number(id));
  const [isFavorite, setIsFavorite] = useState(false);

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
            <FavoriteButton
              isFavorite={isFavorite}
              onToggle={() => setIsFavorite(!isFavorite)}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MovieDetail;
