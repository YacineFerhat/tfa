import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Payment, Dashboard, Home } from "pages";
import { Container } from "components";
function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        {JSON.parse(localStorage.getItem("TFA")) && (
          <>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
          </>
        )}
      </Switch>
    </Container>
  );
}

export default App;
