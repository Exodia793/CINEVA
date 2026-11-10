import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/Homepage";
import SearchPage from "./pages/Searchpage";
import MovieDetail from "./pages/Moviedetail";
import WatchPage from "./pages/Watchpage";
import WatchlistPage from "./pages/Watchlistpage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/watchlist"
            element={
              <ProtectedRoute>
                <WatchlistPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
