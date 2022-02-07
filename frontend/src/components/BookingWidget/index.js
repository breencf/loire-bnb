import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./BookingWidget.css";
import { useParams } from "react-router-dom";
import { bookOneTasting } from "../../store/tasting";
import { staticTimeList } from "../CreateWineryForm/form-lists";

export const BookingWidget = ({ count, average }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.sessions.user.id);
  const { id } = useParams(); /////????????
  const now = new Date();

  const nowMonth = now.getMonth() > 9 ? now.getMonth() : `0${now.getMonth()}`;
  const nowDate = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`;

  const [date, setDate] = useState(
    `${now.getFullYear()}-${nowMonth}-${nowDate + 1}`
  );
  const [numGuests, setNumGuests] = useState(1);
  const [time, setTime] = useState(staticTimeList[0]);
  const [errors, setErrors] = useState([]);

  const onSubmit = async (e) => {
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
      window.alert("tasting booked!");
    }
  };
  return (
    <div id="bookingWidget">
      <div id="bookingHeading">
        <h4>Book</h4>
        <h5><i className="fas fa-star"></i>{average} {count} reviews</h5>
      </div>

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
          <select onChange={(e) => setTime(e.target.value)}>
            {staticTimeList.map((time) => {
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
            required
          />
        </div>
        <div>
          <button className="bookingSubmitButton">Submit</button>
        </div>
      </form>
    </div>
  );
};
