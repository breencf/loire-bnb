import { useDispatch } from "react-redux";
import { useState } from "react";
import { createAWinery } from "../../store/winery";

const CreateWineryForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [address, setAddress] = useState();
  const [town, setTown] = useState("");
  const [maxGuests, setMaxGuests] = useState();
  const [regionId, setRegionId] = useState(0);
  const [varietals, setVarietal] = useState([]);
  const [wineStyles, setWineStyles] = useState([]);
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      createAWinery({
        name,
        content,
        lat,
        long,
        address,
        town,
        maxGuests,
        regionId,
        varietals,
        wineStyles,
        images,
      })
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  return (
    <div>
      <h2>Add a winery</h2>
      <form onSubmit={onSubmit}>
        <div>
          <ul>
            {errors.map((error, i) => {
              <li key={i}>{error}</li>;
            })}
          </ul>
        </div>
        <div>
          <label htmlFor="name">Winery Name</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Winery Description</label>
          <input
            id="content"
            type="textarea"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            required
          />
        </div>
        <div>
          <label htmlFor="lat">Latitude</label>
          <input
            id="lat"
            type="number"
            onChange={(e) => setLat(e.target.value)}
            value={lat}
            required
          />
        </div>
        <div>
          <label htmlFor="long">Longitude</label>
          <input
            id="long"
            type="number"
            onChange={(e) => setLong(e.target.value)}
            value={long}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address(optional)</label>
          <input
            id="address"
            type="string"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            required
          />
        </div>
        <div>
          <label htmlFor="town">Town</label>
          <input
            id="town"
            type="string"
            onChange={(e) => setTown(e.target.value)}
            value={town}
            required
          />
        </div>
        <div>
          <label htmlFor="maxGuests">Maximum number of Guests</label>
          <input
            id="maxGuests"
            type="number"
            onChange={(e) => setMaxGuests(e.target.value)}
            value={maxGuests}
            required
          />
        </div>
        <div>
          <label htmlFor="images">Images</label>
          <input
            id="images"
            type="textarea"
            onChange={(e) => setImages((e.target.value).split(","))}
            value={images}
            required
          />
        </div>
        {/* <div>
        {wineStyles.map(wineStyle => {
            return(
        <>
        <input type="checkbox" id={`${wineStyle}`} value={`${wineStyle}`} name="wineStyles[]"/>
        <label for={`${wineStyle}`}> {`${wineStyle}`}</label>
        </>)
        </div> */}
      </form>
    </div>
  );
};
