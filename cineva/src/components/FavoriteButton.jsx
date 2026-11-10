import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <Button
      variant="outlined"
      color="inherit"
      startIcon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      onClick={onToggle}
    >
      {isFavorite ? "Tersimpan di Watchlist" : "Tambah ke Watchlist"}
    </Button>
  );
}

export default FavoriteButton;
