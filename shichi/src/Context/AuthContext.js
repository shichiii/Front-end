import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const navigate = useNavigate();
  let initialAuthTokens = null;
  try {
    initialAuthTokens = storedToken ? storedToken : null;
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  const [authTokens, setAuthTokens] = useState(initialAuthTokens);
  const [chatRoomId, setChatRoomId] = useState(0);
  const [search, setSearch] = useState();

  useEffect(() => {
    localStorage.setItem("token", authTokens);

    return () => {};
  }, [authTokens]);

  const logoutUser = () => {
    setAuthTokens(null);
    localStorage.removeItem("token");
    navigate("/login");
  };
  const contextData = {
    authTokens,
    setAuthTokens,
    logoutUser,
    chatRoomId,
    setChatRoomId,
    search,
    setSearch,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
