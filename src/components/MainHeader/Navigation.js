import React from "react";

import classes from "./Navigation.module.css";
import AuthStore from "../../stores/auth-context";

const Navigation = () => {
  return (
    <AuthStore.Consumer>
      {(auth) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {auth.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {auth.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {auth.isLoggedIn && (
                <li>
                  <button onClick={auth.logoutHandler}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthStore.Consumer>
  );
};

export default Navigation;
