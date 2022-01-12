import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addWinery } from "../../store/winery";
import { getForm } from "../../store/form";
import { MultiSelect } from "react-multi-select-component";
import "./CreateWinery.css";

const varietalList = [
  { label: "Melon de Bourgogne", id: 1 },
  { label: "Chenin Blanc", id: 2 },
  { label: "Cabernet Franc", id: 3 },
  { label: "Romorantin", id: 4 },
  { label: "Chardonnay", id: 5 },
  { label: "Sauvignon Blanc", id: 6 },
  { label: "Folle Blanche", id: 7 },
  { label: "Tressailier", id: 8 },
  { label: "Pinot Noir", id: 9 },
  { label: "Gamay", id: 10 },
  { label: "Grolleau", id: 11 },
  { label: "Côt/Malbec", id: 12 },
  { label: "Pineau d'Aunis", id: 13 },
];

const wineStyleList = [
  { label: "Sparkling", id: 1 },
  { label: "White", id: 2 },
  { label: "Orange/Skin-Contact", id: 3 },
  { label: "Rosé", id: 4 },
  { label: "Red", id: 5 },
  { label: "Dessert/Fortified", id: 6 },
];

const regionList = [
  { label: "Pays Nantais", id: 1 },
  { label: "Anjou", id: 2 },
  { label: "Saumur", id: 3 },
  { label: "Touraine", id: 4 },
  { label: "Coteaux-du-Giennois", id: 5 },

  { label: "Sancerre", id: 6 },
  { label: "Pouilly-fumé/Pouilly-sur-Loire", id: 7 },
  { label: "Menetou Salon", id: 8 },
  { label: "Valençay", id: 9 },
  { label: "Quincy", id: 10 },

  { label: "Reuilly", id: 11 },
  { label: "Châteaumeillant", id: 12 },
  { label: "Saint-Pourçain", id: 13 },
  { label: "Côtes Roannaises", id: 14 },
  { label: "Côtes d’Auvergne", id: 15 },

  { label: "Côtes du Forez", id: 16 },
  { label: "Vouvray", id: 17 },
  { label: "Chinon", id: 18 },
  { label: "Bourgueil", id: 19 },
];

const CreateWineryForm = () => {
  const dispatch = useDispatch();
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
  const [region, setRegion] = useState(0);
  const [varietals, setVarietals] = useState([]);
  const [wineStyles, setWineStyles] = useState([]);
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);

  // console.log(varietalList, wineStyleList);
  // console.log(varietalList[0].length, wineStyleList[0].length);

  useEffect(() => {
    dispatch(getForm());
  }, [dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const winery = {
      name,
      content,
      lat,
      long,
      address,
      town,
      maxGuests,
      region,
      varietals,
      wineStyles,
      images,
    };
    console.log(winery);
    return dispatch(addWinery(winery)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
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
          <label htmlFor="name"></label>
          <input
            id="name"
            label="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            placeholder="Winery Name"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="content"></label>
          <textarea
            id="content"
            label="textarea"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="Winery Description: give customers an idea of what makes your winery so special -- WHY should they book a tasting with you?"
            required
          />
        </div>
        <div className="formDiv">
          <label htmlFor="lat"></label>
          <input
            id="lat"
            label="text"
            onChange={(e) => setLat(e.target.value)}
            value={lat}
            required
            placeholder="Latitude"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="long"></label>
          <input
            id="long"
            label="text"
            onChange={(e) => setLong(e.target.value)}
            value={long}
            required
            placeholder="Longitude"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="address"></label>
          <input
            id="address"
            label="string"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder="Address (optional)"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="town"></label>
          <input
            id="town"
            label="string"
            onChange={(e) => setTown(e.target.value)}
            value={town}
            required
            placeholder="Town/City"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="maxGuests"></label>
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
          <label htmlFor="images"></label>
          <textarea
            id="images"
            label="textarea"
            onChange={(e) => setImages(e.target.value.split(","))}
            value={images}
            required
            placeholder="Images: enter each url separated by a comma (,) with no spaces. For example: https://wine.com/wine.jpg,https://loire.com/loire.jpg"
          />
        </div>
        <div>
          <h4>Select Varietals</h4>
          <MultiSelect
            options={varietalList}
            value={varietals}
            onChange={setVarietals}
            labelledBy="Select"
          />
        </div>

        <hr />
        <div>
          <h4>Select Wine Styles</h4>
          <MultiSelect
            options={wineStyleList}
            value={wineStyles}
            onChange={setWineStyles}
            labelledBy="Select"
          />
        </div>
        <div>
          <h4>Select Region</h4>
          <select>
            {regionList.map((region) => {
              return(<option value={`${region.label}`} id={`${region.id}`}>{region.label}</option>)
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
