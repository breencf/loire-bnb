import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./BookingWidget.css";
import { useParams } from "react-router-dom";
import { bookOneTasting } from "../../store/tasting";

export const BookingWidget = ({ wineryId }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.sessions.user.id);
  const { id } = useParams(); /////????????
  const now = new Date();

  const nowMonth = now.getMonth() > 9 ? now.getMonth() : `0${now.getMonth()}`
  const nowDate = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`


  const [date, setDate] = useState(
    `${now.getFullYear()}-${nowMonth}-${nowDate}`
  );
  const [numGuests, setNumGuests] = useState(0);
  const [time, setTime] = useState(`${now.getHours()}:${now.getMinutes()}`);
  const [errors, setErrors] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const tasting = {
      userId,
      wineryId: id,
      date,
      numGuests,
      time,
    };

    const newTasting = dispatch(bookOneTasting(tasting)); ///////////////////
    if (newTasting) console.log("tasting successful!");
  };
  return (
    <div id="bookingWidget">
      <div id="bookingHeading">
        <h4>Book</h4>
        <h5>Rating Reviews</h5>
      </div>

      <form onSubmit={onSubmit} id="book-tasting-form">
        <div className="bookingDiv">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            label="date"
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </div>
        <div className="bookingDiv">
          <label htmlFor="time">Time</label>
          <input
            id="time"
            label="time"
            type="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
          />
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
