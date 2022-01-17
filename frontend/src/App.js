//packages
import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
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

    //dispatch(getForm())
  }, [dispatch]);


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
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/wineries/create">
            <CreateWineryForm />
          </Route>
          <Route path="/wineries/:id">
            <WineryPage />
          </Route>
          <Route path="/mywineries">
            <MyWineries isLoaded={isLoaded}/>
          </Route>
          <Route>
          <div id="fourzerofour">
      <h2>Zut!</h2>
      <p>We can't seem to find that page. </p>
      <Link to="/">
        <button className="submitButton">Take me home!</button>
      </Link>
      <img src="https://res.cloudinary.com/jadecabbage/image/upload/v1642365991/loirebnb%20assets/IMG_2308_hsx7nn.jpg" height="500"/>

    </div>
          </Route>
        </Switch>
      </>
    )
  );
}

export default App;
