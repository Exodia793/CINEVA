import { TextField, MenuItem } from "@mui/material";

function FilterYear({ value, options, onFilterChange }) {
  return (
    <TextField
      select
      fullWidth
      label="Tahun Rilis"
      value={value}
      onChange={(e) => onFilterChange(e.target.value)}
    >
      <MenuItem value="Semua">Semua</MenuItem>
      {options.map((year) => (
        <MenuItem key={year} value={year}>
          {year}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default FilterYear;
