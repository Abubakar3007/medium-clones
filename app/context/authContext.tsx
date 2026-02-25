"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (data: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        // 🔥 AUTO TEST USER (for testing only)
        const dummyUser: User = {
          id: "1",
          email: "abu123@gmail.com",
        };

        localStorage.setItem("user", JSON.stringify(dummyUser));
        setUser(dummyUser);
      }
    } catch (error) {
      console.error("Invalid user in localStorage");
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (data: User) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
    router.push("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};