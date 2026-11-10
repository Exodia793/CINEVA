import { Link, useParams } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import VideoPlayer from "../components/VideoPlayer";
import VideoInfo from "../components/VideoInfo";
import movies from "../data/movies";
import { getYoutubeId } from "../utils/Youtube.js";

function WatchPage() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));
  const videoId = movie ? getYoutubeId(movie.trailerUrl) : "";

  if (!movie) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h5" gutterBottom>
          Film tidak ditemukan
        </Typography>
        <Button variant="outlined" color="inherit" component={Link} to="/">
          Kembali ke Beranda
        </Button>
      </Container>
    );
  }

  if (!videoId) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h5" gutterBottom>
          Trailer belum tersedia untuk "{movie.title}"
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          component={Link}
          to={`/movie/${movie.id}`}
        >
          Kembali ke Detail Film
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <VideoPlayer key={videoId} videoId={videoId} />
      <VideoInfo movie={movie} />
    </Container>
  );
}

export default WatchPage;
