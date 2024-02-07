import React from "react";
export const AuthContext = React.createContext();
function AuthContextProvider({ children }) {
  const [Products, setProducts] = React.useState([]);
  const [login , setLogin] = React.useState(false)
  return (
    <AuthContext.Provider value={{ Products, setProducts, login , setLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
