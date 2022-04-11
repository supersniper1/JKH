import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const signIn = (user, cb) => {
    setUser(user);
    cb();
  }

  const signOut = (cb) => {
    setUser(null);
    cb();
  }

  const value = { user, signIn, signOut }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}