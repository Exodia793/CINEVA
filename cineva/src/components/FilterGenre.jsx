import { TextField, MenuItem } from "@mui/material";

function FilterGenre({ value, options, onFilterChange }) {
  return (
    <TextField
      select
      fullWidth
      label="Genre"
      value={value}
      onChange={(e) => onFilterChange(e.target.value)}
    >
      <MenuItem value="Semua">Semua</MenuItem>
      {options.map((genre) => (
        <MenuItem key={genre} value={genre}>
          {genre}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default FilterGenre;
