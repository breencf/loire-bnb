//packages
import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//components
import { SignupFormPage } from "./components/SignupFormPage";
import { Navigation } from "./components/Navigation";
import { getWineries } from "./store/winery";
import CreateWineryForm from "./components/CreateWineryForm";

//misc
import { restoreUser } from "./store/session";
import { WineryList } from "./components/WineryList";
import { Homepage } from "./components/Homepage";
import { WineryPage } from "./components/WineryPage";
import { MyWineries } from "./components/WineryList/MyWineries";
import { loadLikes } from "./store/like";
import { SavedWineries } from "./components/WineryList/SavedWineries";
import { MyTastings } from "./components/MyTastings";
import { loadTastings } from "./store/tasting";
import { About } from "./components/About/index";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const { user } = useSelector((state) => state.sessions);
  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
    // dispatch(getWineries());
  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Homepage />
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
            <MyWineries />
          </Route>
          <Route path="/tastings">
            <MyTastings />
          </Route>
          <Route path="/savedwineries">
            <SavedWineries />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <div id="fourzerofour">
              <h2>Zut!</h2>
              <p>We can't seem to find that page. </p>
              <Link to="/">
                <button className="submitButton">Take me home!</button>
              </Link>
              <img
                src="https://res.cloudinary.com/jadecabbage/image/upload/v1642365991/loirebnb%20assets/IMG_2308_hsx7nn.jpg"
                height="500"
              />
            </div>
          </Route>
        </Switch>
      </>
    )
  );
}

export default App;
