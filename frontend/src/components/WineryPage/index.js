import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const WineryPage = () => {
  const { id } = useParams();
  console.log("id", id);
  const wineries = useSelector((state) => state.wineries);
  const winery = wineries[id];

  return (
    <div>
      <h1>winery.name </h1>
      <p>winery.content</p>
    </div>
  );
};
