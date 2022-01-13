import { useSelector } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";

import { WineryCard } from "../WineryCard";
import { WineryPage } from "../WineryPage";


export const WineryList = () => {
  const wineries = useSelector((state) => state.wineries);
  console.log('in winery list')

  return (
    <div>
      <ul>
        {Object.values(wineries).map((winery) => {
          return(
            <div>
            <Link to={`/wineries/${winery.id}`}>
            <WineryCard key={winery.id} id={winery.id} winery={winery} />;
            </Link>
            </div>)
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
