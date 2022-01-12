import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addWinery } from "../../store/winery";
import { getForm } from "../../store/form";
import { MultiSelect } from "react-multi-select-component";
import {Redirect} from 'react-router-dom'
import "./CreateWinery.css";
import { varietalList, wineStyleList, regionList } from "./form-lists";

const CreateWineryForm = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.sessions.user.id);
  // const { varietalList, wineStyleList, regionList } = useSelector(
  //   (state) => state.form
  // );
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [region, setRegion] = useState("");
  const [varietals, setVarietals] = useState([]);
  const [wineStyles, setWineStyles] = useState([]);
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getForm());
  }, [dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const regionId = regionList.find((regionObj) => regionObj.label === region);
    const winery = {
      name,
      ownerId: userId,
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
    console.log(winery);
    const newWinery = dispatch(addWinery(winery)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });

    console.log(newWinery)
    // if (!data.errors) <Redirect to="/wineries/:id"/>

  };

  return (
    <div id="create-winery-form">
      <h1>Add a winery</h1>
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setContent(e.target.value)}
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
            onChange={(e) => setLat(e.target.value)}
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
            onChange={(e) => setLong(e.target.value)}
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
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder="1 Le Bourg"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="town">Town</label>
          <input
            id="town"
            label="string"
            onChange={(e) => setTown(e.target.value)}
            value={town}
            required
            placeholder="Saint-Andelain"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="maxGuests">Maximum number of guests</label>
          <input
            id="maxGuests"
            label="number"
            onChange={(e) => setMaxGuests(e.target.value)}
            value={maxGuests}
            required
            placeholder="Maximum number of guests"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="images">Images</label>
          <textarea
            id="images"
            label="textarea"
            onChange={(e) => setImages(e.target.value.split(","))}
            value={images}
            required
            placeholder="Images: enter each url separated by a comma (,) with no spaces. For example: https://wine.com/wine.jpg,https://loire.com/loire.jpg"
          />
        </div>
        <div className="dropdown">
          <h4>Select Varietals</h4>
          <MultiSelect
            options={varietalList}
            value={varietals}
            onChange={setVarietals}
            labelledBy="Select"
          />
        </div>

        <hr />
        <div className="dropdown">
          <h4>Select Wine Styles</h4>
          <MultiSelect
            options={wineStyleList}
            value={wineStyles}
            onChange={setWineStyles}
            labelledBy="Select"
          />
        </div>
        <div className="dropdown">
          <h4>Select Region</h4>
          <select onChange={(e) => setRegion(e.target.value)}>
            {regionList.map((region) => {
              return (
                <option
                  key={`${region.label}`}
                  value={`${region.label}`}
                  id={`${region.id}`}
                >
                  {region.label}
                </option>
              );
            })}
          </select>
        </div>

        <hr />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateWineryForm;
