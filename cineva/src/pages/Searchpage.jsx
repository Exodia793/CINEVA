import { useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import SearchBar from "../components/SearchBar";
import FilterGenre from "../components/FilterGenre";
import FilterYear from "../components/FilterYear";
import MovieList from "../components/MovieList";
import movies from "../data/movies";

const genres = [...new Set(movies.map((m) => m.genre))].sort();
const years = [...new Set(movies.map((m) => m.year))].sort((a, b) => b - a);

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Semua");
  const [selectedYear, setSelectedYear] = useState("Semua");

  const filteredMovies = movies.filter((movie) => {
    const matchTitle = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchGenre =
      selectedGenre === "Semua" || movie.genre === selectedGenre;
    const matchYear = selectedYear === "Semua" || movie.year === selectedYear;
    return matchTitle && matchGenre && matchYear;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Pencarian
      </Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={6}>
          <SearchBar value={searchQuery} onSearch={setSearchQuery} />
        </Grid>
        <Grid size={3}>
          <FilterGenre
            value={selectedGenre}
            options={genres}
            onFilterChange={setSelectedGenre}
          />
        </Grid>
        <Grid size={3}>
          <FilterYear
            value={selectedYear}
            options={years}
            onFilterChange={setSelectedYear}
          />
        </Grid>
      </Grid>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {filteredMovies.length} film ditemukan
      </Typography>

      {filteredMovies.length > 0 ? (
        <MovieList movies={filteredMovies} />
      ) : (
        <Typography>
          Film tidak ditemukan. Coba kata kunci atau filter lain.
        </Typography>
      )}
    </Container>
  );
}

export default SearchPage;
