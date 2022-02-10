import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import { getWineries } from "../../store/winery";
import { MapContainer } from "../Maps";

import { WineryCard } from "../WineryCard";
import { WineryPage } from "../WineryPage";
import("./WineryList.css");

export const WineryList = () => {
  const dispatch = useDispatch();
  const wineries = useSelector((state) => state.wineries);
  const [hoveredWinery, setHoveredWinery] = useState(null);

  useEffect(() => {
    dispatch(getWineries());
  }, [dispatch]);

  // useEffect(() => console.log(hoveredWinery), [hoveredWinery]);

  const handleMouseEnter = (e) => {
    console.log('hovered')
    console.log(e)
  }

  return (
    <div className="wineryListContainer">
      <div className="cardList">
        <ul>
          {Object.values(wineries).map((winery) => {
            return (
                <Link to={`/wineries/${winery?.id}`} onMouseEnter={handleMouseEnter}
                >
                  <WineryCard
                    key={winery?.id}
                    id={winery?.id}
                    winery={winery}
                  />
                </Link>

            );
          })}
        </ul>
      </div>
      <div className="map">
        <MapContainer
          wineries={Object.values(wineries)}
          hoveredWinery={hoveredWinery}
        />
      </div>

      <Switch>
        <Route path="/wineries/:id">
          <WineryPage />
        </Route>
      </Switch>
    </div>
  );
};
