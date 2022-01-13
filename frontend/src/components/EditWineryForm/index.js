import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
//ADD STORE
import { getForm } from "../../store/form";
import { updateWinery } from "../../store/winery";
import { MultiSelect } from "react-multi-select-component";
import "../CreateWineryForm/CreateWinery.css";
import { useHistory, useParams } from "react-router-dom";
import { staticVarietalList, staticRegionList, staticWineStyleList } from "../CreateWineryForm/form-lists";

export const EditWineryForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { varietalList, wineStyleList, regionList } = useSelector(
    (state) => state.form
  );
  const ownerId = useSelector((state) => state.sessions.user.id);

  const { id } = useParams();
  // console.log("=================", id);

  const { wineries } = useSelector((state) => state.wineries);
  const winery = wineries?.id;

  useEffect (() => {
    // console.log("===================================");

    // console.log(winery)
  },[winery])

  const [name, setName] = useState(winery?.name);
  const [content, setContent] = useState(winery?.content);
  const [lat, setLat] = useState(winery?.lat);
  const [long, setLong] = useState(winery?.long);
  const [address, setAddress] = useState(winery?.address);
  const [town, setTown] = useState(winery?.town);
  const [maxGuests, setMaxGuests] = useState(winery?.maxGuests);
  const [region, setRegion] = useState(winery?.region); //?
  const [varietals, setVarietals] = useState(winery?.varietals); //?
  const [wineStyles, setWineStyles] = useState(winery?.wineStyles); //?
  const [image1, setImage1] = useState(winery?.Images[0]); //?
  const [image2, setImage2] = useState(winery?.Images[1]); //?
  const [image3, setImage3] = useState(winery?.Images[2]); //?
  const [errors, setErrors] = useState([]);

  const updateName = (e) => setName(e.target.value);
  const updateContent = (e) => setContent(e.target.value);
  const updateLat = (e) => setLat(e.target.value);
  const updateLong = (e) => setLong(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateTown = (e) => setTown(e.target.value);
  const updateMaxGuests = (e) => setMaxGuests(e.target.value);
  const updateRegion = (e) => setRegion(e.target.value);
  const updateVarietals = (e) => setVarietals(e.target.value);
  const updateWineStyles = (e) => setWineStyles(e.target.value);
  const updateImage1 = (e) => setImage1(e.target.value);
  const updateImage2 = (e) => setImage2(e.target.value);
  const updateImage3 = (e) => setImage3(e.target.value);

  useEffect(() => {
    dispatch(getForm());
  }, [dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const regionId = regionList.find((regionObj) => regionObj.label === region);
    const images = [];
    if (image1) images.push(image1);
    if (image2) images.push(image2);
    if (image3) images.push(image3);

    // const winery = {
    //   name,
    //   ownerId,
    //   content,
    //   lat,
    //   long,
    //   address,
    //   town,
    //   maxGuests,
    //   regionId: regionId.id,
    //   varietals,
    //   wineStyles,
    //   images,
    // };
    // console.log(winery);
    // const newWinery = dispatch(updateWinery(winery)).catch(async (res) => {
    //   const data = await res.json();
    //   if (data && data.errors) setErrors(data.errors);
    // });

    // if (newWinery) history.push(`/wineries/${newWinery.id}`);
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
            onChange={(e) => updateName(e.target.value)}
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
            onChange={(e) => updateContent(e.target.value)}
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
            onChange={(e) => updateLat(e.target.value)}
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
            onChange={(e) => updateLong(e.target.value)}
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
            onChange={(e) => updateAddress(e.target.value)}
            value={address}
            placeholder="1 Le Bourg"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="town">Town</label>
          <input
            id="town"
            label="string"
            onChange={(e) => updateTown(e.target.value)}
            value={town}
            required
            placeholder="Saint-Andelain"
          />
        </div>
        <div className="dropdown">
          <h4>Select Region</h4>
          <select onChange={(e) => updateRegion(e.target.value)}>
            <option value="" disabled selected hidden>
              Select...
            </option>
            {regionList?.map((region) => {
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
        <div className="formDiv">
          <label htmlFor="maxGuests">Maximum number of guests</label>
          <input
            id="maxGuests"
            label="number"
            onChange={(e) => updateMaxGuests(e.target.value)}
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
            onChange={updateVarietals}
            labelledBy="Select"
          />
        </div>

        <hr />
        <div className="dropdown">
          <h4>Select Wine Styles</h4>
          <MultiSelect
            options={staticWineStyleList}
            value={wineStyles}
            onChange={updateWineStyles}
            labelledBy="Select"
          />
        </div>
        <div className="formDiv">
          <h4>Images</h4>
          <label htmlFor="image1"></label>
          <input
            id="image1"
            label="text"
            onChange={(e) => updateImage1(e.target.value)}
            value={image1}
            placeholder="Image URL #1"
          />
          <label htmlFor="image2"></label>
          <input
            id="image2"
            label="text"
            onChange={(e) => updateImage2(e.target.value)}
            value={image2}
            placeholder="Image URL #2"
          />
          <label htmlFor="image3"></label>
          <input
            id="image3"
            label="text"
            onChange={(e) => updateImage3(e.target.value)}
            value={image3}
            placeholder="Image URL #3"
          />
        </div>
        <hr />
        <div>
          <button className="submitButton">Submit</button>
        </div>
      </form>
    </div>
  );
};
