import { Link } from "react-router-dom";

export const WineryCard = ({ id, wineries }) => {
  const winery = wineries.findByPk(id);
  return (
    <Link to={`/wineries/${winery}`}>
      <div className="wineryCard">
        <div className="wineryCardImages">{winery.images[0]}</div>
        <div className="wineryCardDetails">
          <h4>{winery.name}</h4>
          <p>{winery.town}</p>
          <p>{winery.regionId}</p>
        </div>
      </div>
    </Link>
  );
};
