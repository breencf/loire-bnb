import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./BookingWidget.css";
import { useParams } from "react-router-dom";

export const BookingWidget = ({wineryId}) => {
  const dispatch = useDispatch();
  const userId = useSelector((state = state.sessions.user.id));
  const { id } = useParams(); /////????????

  const [date, setDate] = useState(new Date());
  const [numGuests, setNumGuests] = useState(0);
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
      <h3>Book</h3>
      <form onSubmit={onSubmit} id="book-tasting-form">
        <div className="bookingDiv">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            label="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </div>
        <div className="bookingDiv">
          <label htmlFor="numGuests">Number of Guests</label>
          <input
            id="numGuests"
            label="number"
            onChange={(e) => setNumGuests(e.target.value)}
            value={numGuests}
            required
          />
        </div>
        <div className="bookingDiv">
          <button clsssName="submitButton">Submit</button>
        </div>
      </form>
    </div>
  );
};
