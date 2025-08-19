import { useState } from "react";
import { UserContext } from "./UserContext"
import { Navigate } from "react-router-dom";

const UserProvider = ({ children }) => {

  const [token, setToken] = useState(true);
  const [user, setUser] = useState({
    name: 'Celeste LLuen',
    email: 'celestelluendelgado05@gmail.com'
  })

  const logout = () => {
    setUser(null);
    setToken(false);
  }

  return (
    <UserContext.Provider
      value={{ user, token, logout }}
    >
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider