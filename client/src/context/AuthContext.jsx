import React, { createContext, useState, useEffect } from "react";
import { customFetch } from "../utils/cutomFetch";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCurrentUser = async () => {
    try {
      setIsLoading(true); 
      const response = await customFetch.get("/users/current-user");
      setCurrentUser(response.data.user);
    } catch (error) {
      setCurrentUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const Login = async (data, navigate) => {
    try {
      const response = await customFetch.post("/auth/login", data);
      const currentUserResponse = await customFetch.get('/users/current-user');
      setCurrentUser(currentUserResponse.data.user);   
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(
        error?.response?.data?.msg || "Login failed. Please try again."
      );
    }
  };

  const Logout = async (navigate) => {
    try {
      await customFetch.get("/auth/logout");
      setCurrentUser(null);
      toast.success("Logged out successfully!");
      localStorage.removeItem("authToken");
      navigate("/"); 
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

useEffect(() => {
  const timeoutId = setTimeout(() => {
    fetchCurrentUser();
  }, 100);

  return () => {
    clearTimeout(timeoutId);
  };
}, []);

  return (
    <AuthContext.Provider
      value={{
        Login,
        currentUser,
        isLoading,
        Logout,
        fetchCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
