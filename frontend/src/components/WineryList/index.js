import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import { getWineries } from "../../store/winery";
import { loadLikes } from "../../store/like";
import {MapContainer} from '../Maps/index'
import { WineryCard } from "../WineryCard";
import { WineryPage } from "../WineryPage";
import("./WineryList.css");

export const WineryList = () => {
  const dispatch = useDispatch();
  const wineries = useSelector((state) => state.wineries);
  const id = useSelector((state)=> state.sessions?.user?.id)

  const [hoveredWinery, setHoveredWinery] = useState(null);

  useEffect(() => {
    dispatch(getWineries());
    if(id) dispatch(loadLikes(id))
  }, [dispatch]);


  const handleMouseEnter = (e) => {
    setHoveredWinery(wineries[e.target.id])
  };

  const handleMouseExit = (e) => {setHoveredWinery(null)}

  return (
    <div className="wineryListContainer">
      <div className="cardList">
        <ul>
          {Object.values(wineries).map((winery) => {
            return (
              <div value={winery.id} key={winery.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
              >
                <Link
                  to={`/wineries/${winery?.id}`}
                  key={winery.id}
                >
                  <WineryCard
                    key={winery?.id}
                    id={winery?.id}
                    winery={winery}
                  />
                </Link>
              </div>
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
