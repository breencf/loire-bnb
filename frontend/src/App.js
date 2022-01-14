//packages
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
//components
import { SignupFormPage } from "./components/SignupFormPage";
import { Navigation } from "./components/Navigation";
import { getWineries } from "./store/winery";
import CreateWineryForm from "./components/CreateWineryForm";

//misc
import { restoreUser } from "./store/session";
import { WineryList } from "./components/WineryList";
import { Homepage } from "./components/Homepage";
import {WineryPage} from './components/WineryPage'
import { MyWineries } from "./components/WineryList/MyWineries";
import { loadLikes } from "./store/like";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
    dispatch(getWineries());
    dispatch(loadLikes())
    //dispatch(getForm())
  }, [dispatch]);

  useEffect(() => {
  },[]);

  return (
    isLoaded && (
      <>
        <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route exact path="/">
            <Homepage/>
          {/* <Route exact path="/wineries/:id/edit">
            <EditWineryForm />
          </Route> */}
          </Route>
            <Route exact path="/wineries">
            <WineryList />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/wineries/create">
            <CreateWineryForm />
          </Route>
          <Route exact path="/wineries/:id">
            <WineryPage />
          </Route>
          <Route path="/mywineries">
            <MyWineries isLoaded={isLoaded}/>
          </Route>
        </Switch>
      </>
    )
  );
}

export default App;
