//packages
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
//components
import { SignupFormPage } from "./components/SignupFormPage";
import { Navigation } from "./components/Navigation";
import { WineryPage } from "./components/WineryPage";

//misc
import { restoreUser } from "./store/session";
import { WineryList } from "./components/WineryList";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route exact path="/">
            <h1>loirebnb</h1>
            <WineryList />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          {/* <Route path="/wineries">
            <WineryPage />
          </Route> */}
        </Switch>
      </>
    )
  );
}

export default App;
