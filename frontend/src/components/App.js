import React from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import { AuthRoute, ProtectedRoute } from "../util/route";

function App() {
  return (
    <>
      <Route exact path="/" component={Welcome} />
      <AuthRoute path="/login" component={Login} />
      <AuthRoute path="/signup" component={SignUp} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
    </>
  );
}

export default App;
