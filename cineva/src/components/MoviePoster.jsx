import { Box } from "@mui/material";

function MoviePoster({ movie }) {
  return (
    <Box
      component="img"
      src={movie.poster}
      alt={movie.title}
      sx={{
        width: "100%",
        aspectRatio: "2 / 3",
        objectFit: "cover",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        display: "block",
      }}
    />
  );
}

export default MoviePoster;
