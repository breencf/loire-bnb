import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import { getWineries } from "../../store/winery";

import { WineryCard } from "../WineryCard";
import { WineryPage } from "../WineryPage";
import("./WineryList.css");

export const WineryList = () => {
  const dispatch = useDispatch()
  const wineries = useSelector((state) => state.wineries);

  useEffect (() => {
    console.log('in the winery list dispatch use effect')
    dispatch(getWineries())
  },[dispatch])

  return (
    <div>
      <ul>
        {Object.values(wineries).map((winery) => {
          return (
            <div key={winery?.id} >
              <Link to={`/wineries/${winery?.id}`}>
                <WineryCard key={winery?.id} id={winery?.id} winery={winery} />
              </Link>
            </div>
          );
        })}
      </ul>

      <Switch>
        <Route path="/wineries/:id">
          <WineryPage />
        </Route>
      </Switch>
    </div>
  );
};
