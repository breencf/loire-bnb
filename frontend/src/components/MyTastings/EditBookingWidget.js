import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { loadTastings, updateTasting, loadTimes } from "../../store/tasting";
import { staticTimeList } from "../CreateWineryForm/form-lists";
import "./MyTastings.css";

export const EditBookingWidget = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const tasting = useSelector((state) => state.tasting.tastings[id]);
  const tastingTimes = useSelector((state) => state.tasting?.times);
  const winery = tasting.Winery;

  const now = new Date();
  const nowMonth = now.getMonth() > 9 ? now.getMonth() : `0${now.getMonth()}`;
  const nowDate = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`;

  const [date, setDate] = useState(tasting.date);
  const [time, setTime] = useState(tasting.time);
  const [numGuests, setNumGuests] = useState(tasting.numGuests);
  const [availableTimes, setAvailableTimes] = useState(staticTimeList);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(loadTimes({ date, id: winery.id }));
  }, [date]);

  useEffect(() => {
    setAvailableTimes(tastingTimes ? [...tastingTimes] : staticTimeList);
  }, [tastingTimes]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const updatedTastingInput = {
      id: tasting.id,
      userId: tasting.userId,
      wineryId: tasting.wineryId,
      date,
      time,
      numGuests,
    };

    const updatedTasting = dispatch(updateTasting(updatedTastingInput));
    if (updatedTasting) {
      dispatch(loadTastings(tasting.userId));
      closeModal();
    }
  };

  const onCancelClick = async (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div id="editBooking">
      <div className="cancel">
        <button className="cancelButton" onClick={onCancelClick}>
          X
        </button>
      </div>
      <h3>Update tasting</h3>
      <h3>{winery.name}</h3>
      <form onSubmit={onSubmit} id="book-tasting-form">
        <div className="bookingDiv">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            label="date"
            type="date"
            onChange={(e) => setDate(e.target.value)}
            required
            min={`${now.getFullYear()}-${nowMonth}-${nowDate}`}
            value={date}
          />
        </div>
        <div className="bookingDiv" id="timeDropdown">
          <label htmlFor="time">Time</label>
          <select onChange={(e) => setTime(e.target.value)} value={time}>
            {availableTimes.map((time) => {
              return (
                <option
                  key={`${time.label}`}
                  value={`${time.label}`}
                  id={`${time.id}`}
                >
                  {time.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="bookingDiv">
          <label htmlFor="numGuests">Guests</label>
          <input
            id="numGuests"
            label="number"
            type="number"
            onChange={(e) => setNumGuests(e.target.value)}
            value={numGuests}
            max={winery.maxGuests}
            min={1}
            required
          />
        </div>
        <div>
          <button className="bookingSubmitButton" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
