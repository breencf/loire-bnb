import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./BookingWidget.css";
import { useParams } from "react-router-dom";

export const BookingWidget = ({ wineryId }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.sessions.user.id);
  const { id } = useParams(); /////????????

  const [date, setDate] = useState(new Date());
  const [numGuests, setNumGuests] = useState(0);
  const [time, setTime] = useState(0);
  const [errors, setErrors] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const tasting = {
      userId,
      wineryId: id,
      date,
      numGuests,
    };

    const newTasting = dispatch; ///////////////////
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
      </form>
      <div>
        <button className="bookingSubmitButton">Submit</button>
      </div>
    </div>
  );
};
