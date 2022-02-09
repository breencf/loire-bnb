import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import { getWineries, deleteWinery } from "../../store/winery";

import { WineryCard } from "../WineryCard";
import { WineryPage } from "../WineryPage";

export const MyWineries = () => {
  const wineries = useSelector((state) => state.wineries);
  const user = useSelector((state) => state.sessions.user);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWineries())
  },[])


  const wineryArr = Object.values(wineries);

  const  myWineries = Object.values(
      wineryArr?.filter((winery) => winery?.ownerId === user.id)
    );


  return (
    <div>
      <ul>
        {myWineries?.map((winery) => {
          return (
            <div>
              {/* {user.id === winery?.ownerId && (
              <div>
                <button onClick={(e) => dispatch(deleteWinery(winery.id))} className="deleteButton">
                  Delete Winery
                </button>
              </div>
            )} */}
              <Link to={`/wineries/${winery.id}`}>
                <WineryCard key={winery.id} id={winery.id} winery={winery} />
              </Link>
            </div>
          )
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
