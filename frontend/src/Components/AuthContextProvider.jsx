import React from "react";
export const AuthContext = React.createContext();
function AuthContextProvider({ children }) {
  const [Products, setProducts] = React.useState([]);
  return (
    <AuthContext.Provider value={{ Products, setProducts }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
