import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImageSlider } from "./ImageSlider";
import ("./WineryPage.css")

export const WineryPage = () => {
  const { id } = useParams();
  const wineries = useSelector((state) => state.wineries);
  const winery = wineries[id];

  return (
    <div>
      <h3>{winery.name} </h3>
      <p>{winery.town}, {winery.Region.name}</p>
  
      <ImageSlider images={winery.Images} />

      <div className="varietals">
        <h4>Varietals</h4>
      {winery.Varietals.map((varietalObj) =>{
        return(<span className="varietalButton" key={varietalObj.id}>{varietalObj.type}</span>)
      })}
      </div>
      <div>
      <h4>About</h4>
      <p>{winery.content}</p>
      </div>
    </div>
  );
};
