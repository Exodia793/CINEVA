import { Link, useLocation } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";

function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <Container maxWidth="sm" sx={{ py: 10, textAlign: "center" }}>
      <Typography
        variant="h1"
        fontWeight={700}
        sx={{ letterSpacing: 4, color: "text.secondary" }}
      >
        404
      </Typography>

      <Typography variant="h5" gutterBottom>
        Halaman tidak ditemukan
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Alamat{" "}
        <Box component="code" sx={{ color: "text.primary" }}>
          {pathname}
        </Box>{" "}
        tidak tersedia di CINÉVA.
      </Typography>

      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Button variant="contained" component={Link} to="/">
          Kembali ke Beranda
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          component={Link}
          to="/search"
        >
          Cari Film
        </Button>
      </Box>
    </Container>
  );
}

export default NotFoundPage;
