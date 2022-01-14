import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
//ADD STORE
import { getForm } from "../../store/form";
import { updateWinery } from "../../store/winery";
import { MultiSelect } from "react-multi-select-component";
import "../CreateWineryForm/CreateWinery.css";
import { useHistory, useParams } from "react-router-dom";
import {
  staticVarietalList,
  staticRegionList,
  staticWineStyleList,
} from "../CreateWineryForm/form-lists";

export const EditWineryForm = ({ hideForm }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { varietalList, wineStyleList, regionList } = useSelector(
    (state) => state.form
  );
  const ownerId = useSelector((state) => state.sessions.user.id);

  const { wineries } = useSelector((state) => state);
  const winery = wineries[id];

  const varietalsInState = [];
  for (const key in winery.Varietals) {
    varietalsInState.push({
      label: winery.Varietals[key].type,
      value: winery.Varietals[key].id,
    });
  }

  const stylesInState = [];
  for (const key in winery.WineStyles) {
    stylesInState.push({
      label: winery.WineStyles[key].type,
      value: winery.WineStyles[key].id,
    });
  }

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [maxGuests, setMaxGuests] = useState(0);
  const [region, setRegion] = useState("");
  const [varietals, setVarietals] = useState(varietalsInState);
  const [wineStyles, setWineStyles] = useState(stylesInState);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [errors, setErrors] = useState([]);

  const updateName = (e) => setName(e.target.value);
  const updateContent = (e) => setContent(e.target.value);
  const updateLat = (e) => setLat(e.target.value);
  const updateLong = (e) => setLong(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateTown = (e) => setTown(e.target.value);
  const updateMaxGuests = (e) => setMaxGuests(e.target.value);
  const updateRegion = (e) => setRegion(e.target.value);
  const updateImage1 = (e) => setImage1(e.target.value);
  const updateImage2 = (e) => setImage2(e.target.value);
  const updateImage3 = (e) => setImage3(e.target.value);

  useEffect(() => {
    setName(winery.name);
    setContent(winery.content);
    setLat(winery.lat);
    setLong(winery.long);
    setAddress(winery.address);
    setTown(winery.town);
    setMaxGuests(winery.maxGuests);
    setVarietals(varietalsInState);
    setWineStyles(stylesInState);
    setImage1(winery.Images[0].imageURL);
    setImage2(winery.Images[1].imageURL);
    setImage3(winery.Images[2].imageURL);
    setRegion(winery.Region.name);
  }, [winery]);

  useEffect(() => {
    dispatch(getForm());
  }, [dispatch]);

  const onSubmit = async (e) => {
    console.log("submitted");
    e.preventDefault();
    setErrors([]);
    const regionId = staticRegionList.find(
      (regionObj) => regionObj.label === region
    );
    const images = [];
    if (image1) images.push(image1);
    if (image2) images.push(image2);
    if (image3) images.push(image3);

    const winery = {
      id,
      name,
      ownerId,
      content,
      lat,
      long,
      address,
      town,
      maxGuests,
      regionId: regionId.id,
      varietals,
      wineStyles,
      images,
    };
    const updatedWinery = dispatch(updateWinery(winery));
    if (updatedWinery) {
      history.push(`wineries/${id}`);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm();
  };
  return (
    <div>
      <h1>Update a winery</h1>
      <form onSubmit={onSubmit} id="create-winery-form">
        <div className="formDiv">
          <ul>
            {errors.map((error, i) => {
              <li key={i}>{error}</li>;
            })}
          </ul>
        </div>
        <div className="formDiv">
          <label htmlFor="name">Winery Name</label>
          <input
            id="name"
            label="text"
            onChange={updateName}
            value={name}
            required
            placeholder="Domaine Didier Dagueneau"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="content">Winery Description</label>
          <textarea
            id="content"
            label="textarea"
            onChange={updateContent}
            value={content}
            placeholder="In a few sentences, give customers an idea of what makes your winery so special -- WHY should they book a tasting with you?"
            required
          />
        </div>
        <div className="formDiv">
          <label htmlFor="lat">Latitude</label>
          <input
            id="lat"
            label="text"
            onChange={updateLat}
            value={lat}
            required
            placeholder="47.306860"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="long">Longitude</label>
          <input
            id="long"
            label="text"
            onChange={updateLong}
            value={long}
            required
            placeholder="2.959046"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="address">Address(optional)</label>
          <input
            id="address"
            label="string"
            onChange={updateAddress}
            value={address}
            placeholder="1 Le Bourg"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="town">Town</label>
          <input
            id="town"
            label="string"
            onChange={updateTown}
            value={town}
            required
            placeholder="Saint-Andelain"
          />
        </div>
        <div className="dropdown">
          <h4>Select Region</h4>
          <select onChange={updateRegion}>
            {staticRegionList?.map((region) => {
              return (
                <option
                  key={`${region?.label}`}
                  value={`${region?.label}`}
                  id={`${region?.id}`}
                >
                  {region?.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="formDiv">
          <label htmlFor="maxGuests">Maximum number of guests</label>
          <input
            id="maxGuests"
            label="number"
            onChange={updateMaxGuests}
            value={maxGuests}
            required
            placeholder="Maximum number of guests"
          />
        </div>
        <div className="dropdown">
          <h4>Select Varietals</h4>
          <MultiSelect
            options={staticVarietalList}
            value={varietals}
            onChange={setVarietals}
            labelledBy="Select"
          />
        </div>

        <hr />
        <div className="dropdown">
          <h4>Select Wine Styles</h4>
          <MultiSelect
            options={staticWineStyleList}
            value={wineStyles}
            onChange={setWineStyles}
            labelledBy="Select"
          />
        </div>
        <div className="formDiv">
          <h4>Images</h4>
          <label htmlFor="image1"></label>
          <input
            id="image1"
            label="text"
            onChange={updateImage1}
            value={image1}
            placeholder="Image URL #1"
          />
          <label htmlFor="image2"></label>
          <input
            id="image2"
            label="text"
            onChange={updateImage2}
            value={image2}
            placeholder="Image URL #2"
          />
          <label htmlFor="image3"></label>
          <input
            id="image3"
            label="text"
            onChange={updateImage3}
            value={image3}
            placeholder="Image URL #3"
          />
        </div>
        <hr />
        <div>
          <button className="submitButton">Save Changes</button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
