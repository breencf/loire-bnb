import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addWinery } from "../../store/winery";
import { getForm } from "../../store/form";
import { Checkbox } from "./Checkbox";

const CreateWineryForm = () => {
  const dispatch = useDispatch();
  const { varietalList, wineStyleList, regionList } = useSelector(
    (state) => state.form
  );
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [address, setAddress] = useState();
  const [town, setTown] = useState("");
  const [maxGuests, setMaxGuests] = useState();
  const [regionId, setRegionId] = useState(0);
  const [varietals, setVarietals] = useState([]);
  const [wineStyles, setWineStyles] = useState([]);
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);

  console.log(varietalList, wineStyleList);
  console.log(varietalList[0].length, wineStyleList[0].length);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      addWinery({
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

  useEffect(() => {
    dispatch(getForm());
  }, [dispatch]);

  const updateCheckedVarietals = (index) => {
    setVarietals(
      varietals.map((varietal, currentIndex) =>
        currentIndex === index
          ? { ...varietal, checked: !varietal.checked }
          : varietal
      )
    );
  };

  const updateCheckedStyles = (index) => {
    setWineStyles(
      wineStyles.map((style, currentIndex) =>
        currentIndex === index ? { ...style, checked: !style.checked } : style
      )
    );
  };

  // const updateCheckedRegion = (index) => {
  //   setRegionId(
  //     regions.map((style, currentIndex) =>
  //       currentIndex === index
  //         ? { ...style, checked: !style.checked }
  //         : style
  //     )
  //   );
  // };

  const isChecked = () => {};
  const checkHandler = () => {};

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
            onChange={(e) => setImages(e.target.value.split(","))}
            value={images}
            required
          />
        </div>
        <div>
          {varietalList[0].map((varietal, index) => {
            return (
              <Checkbox
                key={varietal.id}
                isChecked={varietal.checked}
                checkHandler={() => updateCheckedVarietals(index)}
                label={varietal.type}
                index={index}
              />
            );
          })}
        </div>
        <hr />
        <div>
          {wineStyleList[0].map((style, index) => {
            return (
              <Checkbox
                key={style.id}
                isChecked={style.checked}
                checkHandler={() => updateCheckedStyles(index)}
                label={style.type}
                index={index}
              />
            );
          })}
        </div>
        <hr />
        {/* <div>
          {regionList[0].map((region, index) => {
            return (
              <Checkbox
                key={region.id}
                isChecked={region.checked}
                checkHandler={() => updateCheckedRegion(index)}
                label={region.name}
                index={index}
              />
            );
          })}
        </div> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateWineryForm;
