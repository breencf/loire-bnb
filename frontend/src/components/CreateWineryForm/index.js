import { useDispatch, useSelector } from "react-redux";
import {  useState, useCallback } from "react";
import { addWinery } from "../../store/winery";
import { MultiSelect } from "react-multi-select-component";
import { useHistory } from "react-router-dom";
import "./CreateWinery.css";
import {
  staticVarietalList,
  staticWineStyleList,
  staticRegionList,
  staticAmenityList,
} from "./form-lists";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import DropZone from "./DropZone";

const CreateWineryForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => state.sessions.user.id);

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
  const [amenities, setAmenities] = useState([]);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [errors, setErrors] = useState([]);
  // const [images, setImages] = useState([])

  const onDrop1 = useCallback((acceptedFiles) => {
    const url = "https://api.cloudinary.com/v1_1/jadecabbage/upload";

    acceptedFiles.forEach(async (acceptedFile) => {
      const formData = new FormData();
      formData.append("file", acceptedFile);
      formData.append("upload_preset", "vngvmpuf");

      const response = await fetch(url, {
        method: "post",
        body: formData,
      });
      const data = await response.json();
      setImage1(data.secure_url);
    });
  }, []);

  const onDrop2 = useCallback((acceptedFiles) => {
    const url = "https://api.cloudinary.com/v1_1/jadecabbage/upload";

    acceptedFiles.forEach(async (acceptedFile) => {
      const formData = new FormData();
      formData.append("file", acceptedFile);
      formData.append("upload_preset", "vngvmpuf");

      const response = await fetch(url, {
        method: "post",
        body: formData,
      });
      const data = await response.json();
      setImage2(data.secure_url);
    });
  }, []);

  const onDrop3 = useCallback((acceptedFiles) => {
    const url = "https://api.cloudinary.com/v1_1/jadecabbage/upload";

    acceptedFiles.forEach(async (acceptedFile) => {
      const formData = new FormData();
      formData.append("file", acceptedFile);
      formData.append("upload_preset", "vngvmpuf");

      const response = await fetch(url, {
        method: "post",
        body: formData,
      });
      const data = await response.json();
      setImage3(data.secure_url);
    });
  }, []);

  const onDrop4 = useCallback((acceptedFiles) => {
    const url = "https://api.cloudinary.com/v1_1/jadecabbage/upload";

    acceptedFiles.forEach(async (acceptedFile) => {
      const formData = new FormData();
      formData.append("file", acceptedFile);
      formData.append("upload_preset", "vngvmpuf");

      const response = await fetch(url, {
        method: "post",
        body: formData,
      });
      const data = await response.json();
      setImage4(data.secure_url);
    });
  }, []);

  const onDrop5 = useCallback((acceptedFiles) => {
    const url = "https://api.cloudinary.com/v1_1/jadecabbage/upload";

    acceptedFiles.forEach(async (acceptedFile) => {
      const formData = new FormData();
      formData.append("file", acceptedFile);
      formData.append("upload_preset", "vngvmpuf");

      const response = await fetch(url, {
        method: "post",
        body: formData,
      });
      const data = await response.json();
      setImage5(data.secure_url);
    });
  }, []);

  const onDrop6 = useCallback((acceptedFiles) => {
    const url = "https://api.cloudinary.com/v1_1/jadecabbage/upload";

    acceptedFiles.forEach(async (acceptedFile) => {
      const formData = new FormData();
      formData.append("file", acceptedFile);
      formData.append("upload_preset", "vngvmpuf");

      const response = await fetch(url, {
        method: "post",
        body: formData,
      });
      const data = await response.json();
      setImage6(data.secure_url);
    });
  }, []);

  const onSubmit = async (e) => {
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
      name,
      ownerId: userId,
      content,
      lat,
      long,
      address,
      town,
      maxGuests,
      regionId: regionId.id,
      amenities,
      varietals,
      wineStyles,
      images,
    };
    const newWinery = dispatch(addWinery(winery)).catch(async (res) => {
      const data = await newWinery.json();
      if (data && data.errors) setErrors(data.errors);
      // else history.push("/mywineries")
    });
    if (newWinery) {
      history.push(`/mywineries`);
    }
  };

  /************* */
  const [autoAddress, setAutoAddress] = useState("");
  const handleSelect = async (value) => {
    const resultName = value.split(",")[0];
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);
    const searchResult = results[0].address_components;

    const streetNumber = searchResult.filter((addressComponent) =>
      addressComponent.types.includes("street_number")
    )[0]?.short_name;

    const filteredAddress = [
      streetNumber ? streetNumber[0].short_name : "",
      searchResult.filter((addressComponent) =>
        addressComponent.types.includes("route")
      )[0].short_name,
    ].join(" ");
    const filteredTown = searchResult.filter((addressComponent) =>
      addressComponent.types.includes("locality")
    )[0].short_name;

    setName(resultName);
    setLat(latlng.lat);
    setLong(latlng.lng);
    setTown(filteredTown);
    setAddress(filteredAddress);
  };

  /*************** */
  return (
    <div id="create-winery-form">
      <h1>Add a winery</h1>

      <form onSubmit={onSubmit} id="create-winery-form">
        <PlacesAutocomplete
          value={autoAddress}
          onChange={setAutoAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div className="formDiv" key={"autocompleteDiv"}>
              <label htmlFor="autocomplete">Search for a Winery</label>
              <input {...getInputProps({ placeholder: "" })} />
              <div key={"suggestionDiv"}>
                {loading ? <div> loading </div> : null}
                {suggestions?.map((suggestion) => {
                  const suggestionStyle = {
                    fontWeight: suggestion.active ? 500 : 400,
                  };
                  return (
                    <div
                      key={suggestion.index}
                      {...getSuggestionItemProps(suggestion, {
                        style: suggestionStyle,
                      })}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <div className="formDiv">
          <ul>
            {errors.map((error, i) => {
              return <li key={i}>{error}</li>;
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
        <div className="dropdown">
          <label htmlFor="region">Region</label>
          <select onChange={(e) => setRegion(e.target.value)}>
            {staticRegionList.map((region) => {
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
            onChange={(e) => setMaxGuests(e.target.value)}
            value={maxGuests}
            required
            placeholder="Maximum number of guests"
          />
        </div>
        <div className="dropdown">
          <label htmlFor="amenities">Amenities</label>
          <MultiSelect
            options={staticAmenityList}
            value={amenities}
            onChange={setAmenities}
            labelledBy="Select"
          />
        </div>
        <div className="dropdown">
          <label htmlFor="varietals">Varietals</label>
          <MultiSelect
            options={staticVarietalList}
            value={varietals}
            onChange={setVarietals}
            labelledBy="Select"
          />
        </div>

        <hr />
        <div className="dropdown">
          <label htmlFor="styles">Wine Styles</label>
          <MultiSelect
            options={staticWineStyleList}
            value={wineStyles}
            onChange={setWineStyles}
            labelledBy="Select"
          />
        </div>
        <div className="formDiv">
          <h4>Images</h4>
          <DropZone onDrop={onDrop1} image={image1} />
          <DropZone onDrop={onDrop2} image={image2} />
          <DropZone onDrop={onDrop3} image={image3} />
          {image1&& image2 && image3 && (
            <>
              <DropZone onDrop={onDrop4} image={image4} />
              <DropZone onDrop={onDrop5} image={image5} />
              <DropZone onDrop={onDrop6} image={image6} />
            </>
          )}
          {/* <label htmlFor="image1"></label>
          <input
            id="image1"
            label="text"
            onChange={(e) => setImage1(e.target.value)}
            value={image1}
            placeholder="Image URL #1"
          />
          <label htmlFor="image2"></label>
          <input
            id="image2"
            label="text"
            onChange={(e) => setImage2(e.target.value)}
            value={image2}
            placeholder="Image URL #2"
          />
          <label htmlFor="image3"></label>
          <input
            id="image3"
            label="text"
            onChange={(e) => setImage3(e.target.value)}
            value={image3}
            placeholder="Image URL #3"
          /> */}
        </div>

        <hr />
        <div>
          <button className="submitButton">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateWineryForm;
