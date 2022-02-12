import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./BookingWidget.css";
import { useHistory, useParams } from "react-router-dom";
import { bookOneTasting, loadTimes } from "../../store/tasting";
import { staticTimeList } from "../CreateWineryForm/form-lists";
import dayjs from "dayjs";

export const BookingWidget = ({ count, average, maxGuests }) => {
  const history = useHistory()
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.sessions?.user?.id);
  const tastingTimes = useSelector((state) => state.tasting?.times);
  const { id } = useParams();
  const now = new Date();

  let nowMonth =
    now.getMonth() > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`;
  let nowDate =
    now.getDate() >= 9 ? now.getDate() + 1 : `0${now.getDate() + 1}`;

  const [date, setDate] = useState(
    `${now.getFullYear()}-${nowMonth}-${nowDate}`
  );
  const [numGuests, setNumGuests] = useState(1);
  const [time, setTime] = useState(staticTimeList[0].label);
  const [errors, setErrors] = useState([]);
  const [book, setBooked] = useState("Book");
  const [availableTimes, setAvailableTimes] = useState(staticTimeList);

  useEffect(() => {
    if(dayjs(date).diff(`${now.getFullYear()}-${nowMonth}-${nowDate}`) > 0) {
    dispatch(loadTimes({ date, id }));
    }
  }, [date, dispatch, id,]);

  useEffect(() => {
    if(userId) setAvailableTimes(tastingTimes ? tastingTimes : staticTimeList);
  }, [tastingTimes, userId]);

  useEffect(() => {
    setBooked("Book");
  }, [numGuests, time, date]);

  const onSubmit = async (e) => {
    if(userId) {
    e.preventDefault();
    setErrors([]);
    const tasting = {
      userId,
      wineryId: id,
      date,
      numGuests,
      time: time,
    };

    const newTasting = dispatch(bookOneTasting(tasting));
    if (newTasting) {
      setBooked("Booked!");
      dispatch(loadTimes({ date, id }));
    }
  }
  else {
    history.push("/signup")
  }
  };

  return (
    <div id="bookingWidget">
      <div id="bookingHeading">
        <h4>Book a Tasting</h4>
        <h5>
          <i className="fas fa-star"></i> {average ? average.toPrecision(3) : 0}{" "}
          · {count} reviews
        </h5>
      </div>
      <ul>
            {errors.map((error, i) => {
              return <li key={i}>{error}</li>;
            })}
          </ul>
      <form onSubmit={onSubmit} id="book-tasting-form">
        <div className="bookingDiv">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            label="date"
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            required
            min={`${now.getFullYear()}-${nowMonth}-${nowDate}`}
            value={date}
          />
        </div>
        <div className="bookingDiv" id="timeDropdown">
          <label htmlFor="time">Time</label>
          <select onChange={(e) => setTime(e.target.value)}>
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
            max={maxGuests}
            required
          />
        </div>
        <div>
          <button className="bookingSubmitButton" disabled={book === "Booked!" ? true: false}>{book}</button>
        </div>
      </form>
    </div>
  );
};
