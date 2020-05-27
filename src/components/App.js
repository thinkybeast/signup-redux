import React from "react";
import "../stylesheets/App.css";
import SignupForm from "./signup/SignupForm";
import VerifyForm from "./verify/VerifyForm";
import { Route, Switch } from "react-router-dom";
import SignupConfimation from "./complete/SignupConfirmation";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SignupForm />
      </Route>
      <Route path="/verify">
        <VerifyForm />
      </Route>
      <Route path="/success">
        <SignupConfimation />
      </Route>
    </Switch>
  );
};

export default App;
