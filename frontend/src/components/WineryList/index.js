import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { getWineries } from "../../store/winery";
import { WineryCard } from "../WineryCard";
import { WineryPage } from "../WineryPage";


export const WineryList = () => {
  const dispatch = useDispatch();
  const wineries = useSelector((state) => state.wineries);

  const wineryArray = Object.values(wineries);

  useEffect(() => {
    dispatch(getWineries());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {Object.values(wineries).map((winery) => {
          return <WineryCard key={winery.id} id={winery.id} winery={winery} />;
        })}
      </ul>

      <Switch>
        <Route path="/wineries/:id">
          <WineryPage wineries={wineries} />
        </Route>
      </Switch>
    </div>
  );
};
