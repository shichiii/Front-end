import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  console.log(
    "================================================================================"
  );
  const storedToken = localStorage.getItem("token");
  console.log("Stored Token:", storedToken);
  const navigate = useNavigate();
  let initialAuthTokens = null;
  try {
    initialAuthTokens = storedToken ? storedToken : null;
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  const [authTokens, setAuthTokens] = useState(initialAuthTokens);
  const [chatRoomId, setChatRoomId] = useState(0);

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
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
