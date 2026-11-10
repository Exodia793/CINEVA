import { createContext, useContext, useState } from "react";
import users from "../data/users";

const AuthContext = createContext();
const STORAGE_KEY = "cineva-user";

function loadUser() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadUser);

  const login = (username, password) => {
    const found = users.find(
      (u) =>
        u.username === username.trim().toLowerCase() && u.password === password,
    );

    if (!found) {
      return { success: false, message: "Username atau password salah." };
    }

    const loggedIn = { username: found.username, name: found.name };
    setUser(loggedIn);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedIn));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
