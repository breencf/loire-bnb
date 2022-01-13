import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImageSlider } from "./ImageSlider";
import("./WineryPage.css");

export const WineryPage = () => {
  const { id } = useParams();
  const wineries = useSelector((state) => state.wineries);
  const winery = wineries[id];

  return (
    <div id="wineryPage">
      <h3>{winery.name} </h3>
      <h4>{winery.User.firstName} {winery.User.lastName}</h4>
      <p>
        {winery.town}, {winery.Region.name}
      </p>

      <ImageSlider images={winery.Images} />

      <div className="varietals">
        <h4>Varietals</h4>
        {winery.Varietals.map((varietalObj) => {
          return (
            <span className="varietalButton" key={varietalObj.id}>
              {varietalObj.type}
            </span>
          );
        })}
      </div>

      <div className="styles">
        <h4>{winery.name} makes</h4>
        {winery.WineStyles.map((styleObj) => {
          return (
            <span className="styleButton" key={styleObj.id}>
              <span className={`styledot-${styleObj.id}`}>
                {/* <i className="fas fa-wine-glass"></i> */}
                <i className="fas fa-circle"></i>
              </span>
              {styleObj.type}
            </span>
          );
        })}
      </div>
      <div>
        <h4>About</h4>
        <p>{winery.content}</p>
      </div>
    </div>
  );
};
