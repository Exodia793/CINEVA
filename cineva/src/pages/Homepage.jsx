import { Container, Typography } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import MovieList from "../components/MovieList";
import movies from "../data/movies";

function HomePage() {
  const featured = movies[0];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <HeroBanner movie={featured} />
      <Typography variant="h5" gutterBottom>
        Katalog Film
      </Typography>
      <MovieList movies={movies} />
    </Container>
  );
}

export default HomePage;
