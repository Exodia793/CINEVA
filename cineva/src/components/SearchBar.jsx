import { TextField } from "@mui/material";

function SearchBar({ value, onSearch }) {
  return (
    <TextField
      fullWidth
      label="Cari judul film"
      value={value}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
