import { createContext, useContext, useState, useEffect } from "react";

const WatchlistContext = createContext();
const STORAGE_KEY = "cineva-watchlist";

function loadWatchlist() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState(loadWatchlist);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  const isFavorite = (id) => watchlist.includes(id);

  const onAddFavorite = (id) =>
    setWatchlist((prev) => (prev.includes(id) ? prev : [...prev, id]));

  const onRemoveFavorite = (id) =>
    setWatchlist((prev) => prev.filter((movieId) => movieId !== id));

  return (
    <WatchlistContext.Provider
      value={{ watchlist, isFavorite, onAddFavorite, onRemoveFavorite }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  return useContext(WatchlistContext);
}
