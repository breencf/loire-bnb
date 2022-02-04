import dayjs from "dayjs";
import Modal from 'react-modal'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MyTastings.css";

import { Route, Switch, Link } from "react-router-dom";
import { deleteTasting, loadTastings } from "../../store/tasting";

import { WineryCard } from "../WineryCard";
import { WineryPage } from "../WineryPage";

export const MyTastings = () => {
  const { wineries, tasting, sessions } = useSelector((state) => state);

  const tastingsArray = Object.values(tasting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTastings(sessions.user.id));
  }, [dispatch]);

  return (
    tastingsArray && (
      <div>
        <ul>
          {tastingsArray.map((tasting) => {
            return (
              <div>
                <span>
                  <h3 id="tastingH3">
                    {dayjs(tasting.date).format("MMMM D, YYYY")}, {tasting.time}{" "}
                    for {tasting.numGuests} guest(s)
                  </h3>
                  {/* </span>
                <span> */}
                  <button
                    id={tasting.id}
                    value={sessions.user.id}
                    onClick={(e) => {
                      dispatch(deleteTasting(e.target.id));
                      dispatch(loadTastings(e.target.value));
                    }}
                    className="deleteButton"
                  >
                    Cancel Reservation
                  </button>
                </span>
                <Link to={`/wineries/${tasting.wineryId}`}>
                  <WineryCard
                    key={tasting.wineryId}
                    id={tasting.wineryId}
                    winery={wineries[tasting.wineryId]}
                  />
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
