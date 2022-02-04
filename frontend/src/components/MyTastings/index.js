import { useSelector } from "react-redux";

import { Route, Switch, Link } from "react-router-dom";

import { WineryCard } from "../WineryCard";
import { WineryPage } from "../WineryPage";

export const MyTastings = () => {
  const { wineries, tasting } = useSelector((state) => state);
  const { userTastings } = tasting;
  console.log(tasting, "=====================================");
  const tastingsArray = Object.values(userTastings);

  return (
    tastingsArray && (
      <div>
        <ul>
          {tastingsArray.map((tasting) => {
            return (
              <div>
                  <h3>{tasting.date}, {tasting.time}</h3>
                <Link to={`/wineries/${tasting.wineryId}`}>
                  <WineryCard
                    key={tasting.wineryId}
                    id={tasting.wineryId}
                    winery={wineries[tasting.wineryId]}
                  />
                  ;
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
    )
  );
};
