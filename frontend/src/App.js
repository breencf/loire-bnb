//packages
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
//components
import { SignupFormPage } from "./components/SignupFormPage";
import { Navigation } from "./components/Navigation";
import { WineryPage } from "./components/WineryPage";
import { getWineries } from "./store/winery";
import CreateWineryForm from "./components/CreateWineryForm";

//misc
import { restoreUser } from "./store/session";
import { WineryList } from "./components/WineryList";
import { getForm } from "./store/form";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
    dispatch(getWineries());
    dispatch(getForm())
  }, [dispatch]);

  useEffect(() => {
  },[]);

  return (
    isLoaded && (
      <>
        <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route exact path="/">
            <h1>Homepage</h1>
          </Route>
            <Route exact path="/wineries">
            <WineryList />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          {/* <Route path="/wineries/:id">
            <WineryPage />
          </Route> */}
          <Route exact path="/wineries/create">
            <CreateWineryForm />
          </Route>
        </Switch>
      </>
    )
  );
}

export default App;
