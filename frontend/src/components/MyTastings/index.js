import dayjs from "dayjs";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MyTastings.css";

import { Route, Switch, Link } from "react-router-dom";
import { deleteTasting, loadTastings } from "../../store/tasting";

import { WineryCard } from "../WineryCard";
import { WineryPage } from "../WineryPage";
import { EditBookingWidget } from "./EditBookingWidget";
import { getWineries } from "../../store/winery";

export const MyTastings = () => {
  const { wineries, sessions } = useSelector((state) => state);
  const tasting = useSelector((state) => state.tasting.tastings)
  const tastingsArray = Object.values(tasting);
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rescheduleWinery, setRescheduleWinery] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);
  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      border: "none",
      borderRadius: "12px",
      boxShadow: "rgb(0 0 0 / 12%) 0px 6px 16px",
    },
  };

  useEffect(() => {
    dispatch(loadTastings(sessions.user.id));
  }, [dispatch, sessions.user.id]);

  useEffect(() => {dispatch(getWineries())}, [dispatch]);

  return (
    tastingsArray &&
    wineries && (
      <div>
        <ul>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modalStyle}
            ariaHideApp={false}
          >
            <EditBookingWidget id={rescheduleWinery} closeModal={closeModal} />
          </Modal>
          {tastingsArray.map((tasting) => {
            return (
              <div key={tasting.id}>
                <span>
                  <h3 id="tastingH3">
                    {dayjs(tasting.date).format("MMMM D, YYYY")}, {tasting.time}{" "}
                    for {tasting.numGuests} guest(s)
                  </h3>
                  {/* </span>
                <span> */}
                  <button
                    onClick={(e) => {
                      openModal();
                      setRescheduleWinery(e.target.value);
                    }}
                    value={tasting.id}
                    className="deleteButton"
                  >
                    Reschedule
                  </button>
                  <button
                    id={tasting.id}
                    value={sessions.user.id}
                    onClick={(e) => {
                      dispatch(deleteTasting(e.target.id));
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
