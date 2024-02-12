import React, { useEffect } from "react";
export const AuthContext = React.createContext();
function AuthContextProvider({ children }) {
  const [Products, setProducts] = React.useState([]);
  const [login, setLogin] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <AuthContext.Provider
      value={{
        Products,
        setProducts,
        login,
        setLogin,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
