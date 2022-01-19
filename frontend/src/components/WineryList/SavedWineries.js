import { useSelector } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";

import { WineryCard } from "../WineryCard";
import { WineryPage } from "../WineryPage";

export const SavedWineries = () => {
  const { wineries } = useSelector((state) => state);
  const { userLikes } = useSelector((state) => state.like);
  const wineryArr = Object.values(wineries);
  const likeArr = Object.keys(userLikes);
  console.log(wineryArr, "==========", likeArr);

  const likedWineries = Object.values(
    wineryArr.filter((winery) => likeArr.includes((winery.id).toString()))
  );

  console.log("========", likedWineries);
  return (
    <div>
      <ul>
        {likedWineries?.map((winery) => {
          return (
            <div>
              <Link to={`/wineries/${winery.id}`}>
                <WineryCard key={winery.id} id={winery.id} winery={winery} />;
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
