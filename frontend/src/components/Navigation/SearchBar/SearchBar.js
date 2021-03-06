import { useState } from "react";
import { useHistory } from "react-router-dom";

export const SearchBar = () => {

  const history = useHistory()

  const [location, setLocation] = useState("");
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState(0);
  const [errors, setErrors] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const query = {
      location,
      date,
      time,
      guests,
    };
    console.log(query);
    history.push("/wineries")

  };
  return (
    <div className="search-bar">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="FYI Searches don't filter!"
          />
        </div>
        |
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            placeholder="Choose a date"
            // min={year, month, day}
          />
        </div>
        |
        <div>
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            placeholder="Choose a time"
          />
        </div>
        |
        <div>
          <label htmlFor="location">Guests</label>
          <input
            id="guests"
            type="text"
            onChange={(e) => setGuests(e.target.value)}
            value={guests}
            placeholder="Add guests"
          />
        </div>
        <button className="searchButton">
          <div id="search">
            <i className="fas fa-search"></i>
          </div>
        </button>
      </form>
    </div>
  );
};
