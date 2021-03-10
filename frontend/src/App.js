import React from "react";
import Header from "./componets/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/auth/login" component={LoginScreen} />
        <Route path="/auth/register" component={RegisterScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
