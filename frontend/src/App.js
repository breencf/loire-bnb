import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { LoginFormPage } from "./components/LoginFormPage";
import { useDispatch, useSelector } from "react-redux";
import { restoreUser } from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <Switch>
          <Route exact path="/">
          <h2>welcome to the homepage</h2>
        </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
        </Switch>
      </>
    )
  );
}

export default App;
