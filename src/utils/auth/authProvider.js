import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const signIn = (user, cb) => {
    localStorage.setItem('token', user)
    // setUser(user);
    cb();
  }

  const signOut = (cb) => {
    localStorage.removeItem('token')
    // setUser(null);
    cb();
  }

  const value = { signIn, signOut }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}