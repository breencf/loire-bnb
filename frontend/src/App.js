//packages
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
//components
import { LoginFormPage } from "./components/LoginFormPage";
import { SignupFormPage } from "./components/SignupFormPage";
import {Navigation} from "./components/Navigation";

//misc
import { restoreUser } from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route exact path="/">
            <h2>welcome to the homepage</h2>
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/logout">
            <LoginFormPage />
          </Route>
        </Switch>
      </>
    )
  );
}

export default App;
