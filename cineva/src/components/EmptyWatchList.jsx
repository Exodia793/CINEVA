import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function EmptyWatchlist() {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
        border: "1px dashed",
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <FavoriteBorderIcon
        sx={{ fontSize: 56, color: "text.secondary", mb: 1 }}
      />
      <Typography variant="h6" gutterBottom>
        Watchlist kamu masih kosong
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Buka detail film lalu klik "Tambah ke Watchlist" untuk menyimpannya di
        sini.
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Jelajahi Film
      </Button>
    </Box>
  );
}

export default EmptyWatchlist;
