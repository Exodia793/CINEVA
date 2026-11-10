import { Container, Typography, Box } from "@mui/material";
import WatchlistItem from "../components/WatchListItem";
import EmptyWatchlist from "../components/EmptyWatchList";
import movies from "../data/movies";
import { useWatchlist } from "../context/WatchlistContext";

function WatchlistPage() {
  const { watchlist, onRemoveFavorite } = useWatchlist();

  const savedMovies = movies.filter((movie) => watchlist.includes(movie.id));

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Watchlist
      </Typography>

      {savedMovies.length === 0 ? (
        <EmptyWatchlist />
      ) : (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {savedMovies.length} film tersimpan
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {savedMovies.map((movie) => (
              <WatchlistItem
                key={movie.id}
                movie={movie}
                onRemoveFavorite={onRemoveFavorite}
              />
            ))}
          </Box>
        </>
      )}
    </Container>
  );
}

export default WatchlistPage;
