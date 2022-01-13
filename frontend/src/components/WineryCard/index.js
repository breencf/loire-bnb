import { Link } from "react-router-dom";
import("./WineryCard.css");

export const WineryCard = ({ winery }) => {
  const imgObj = Object.values(winery.Images);


if(imgObj) {
  return (
    <Link to={`/wineries/${winery.id}`}>
      <div className="wineryCard">
        <div className="wineryCardImages" id={`${imgObj[0].wineryId}`}>
          <img src={`${imgObj.imageURL}`} width="300" height="200"></img>
        </div>

        <div className="wineryCardDetails">
          <p>{winery.Region.name}</p>
          <h4>{winery.name}</h4>
          <hr />
          <p>{winery.town}</p>
          <span></span>
        </div>
      </div>
    </Link>
  );
}
};
