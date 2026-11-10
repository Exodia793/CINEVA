import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  Box,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { APP_NAME } from "../constants";

function LoginPage() {
  const { user, login } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (user) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username, password);
    if (!result.success) {
      setError(result.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ py: 8 }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ letterSpacing: 3 }}
        >
          {APP_NAME}
        </Typography>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Login
        </Typography>

        {location.state?.from && (
          <Alert severity="info" sx={{ mb: 2 }}>
            Silakan login untuk melanjutkan.
          </Alert>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "grid", gap: 2 }}
        >
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <Button type="submit" variant="contained" size="large">
            Login
          </Button>
        </Box>

        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          sx={{ mt: 3 }}
        >
          Akun demo: <b>demo</b> / <b>demo123</b> atau <b>admin</b> /{" "}
          <b>admin123</b>
        </Typography>
      </Paper>
    </Container>
  );
}

export default LoginPage;
