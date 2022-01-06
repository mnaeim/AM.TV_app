import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

//create your first component
// export const Layout = () => {
//   //the basename is used when your project is published in a subdirectory and not in the root of the domain
//   // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
//   const basename = process.env.BASENAME || "";

//   return (
function Layout() {
  const user = {
    name: "abc",
  };

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        )}
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
