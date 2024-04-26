import { createContext, useEffect, useState } from "react";

const AuthStore = createContext({
  email: "",
  password: "",
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});
export default AuthStore;

export const MyProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // console.log("effect");
    const item = localStorage.getItem("isLoggedIn");
    if (item === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  // console.log("after");

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <AuthStore.Provider
      value={{
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
        isLoggedIn: isLoggedIn,
      }}
    >
      {children}
    </AuthStore.Provider>
  );
};
