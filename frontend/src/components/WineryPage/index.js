import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ImageSlider } from "./ImageSlider";
import { useEffect, useState } from "react";
import { getOneWinery } from "../../store/winery";
import { EditWineryForm } from "../EditWineryForm";
import("./WineryPage.css");

export const WineryPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const winery = useSelector((state) => state.wineries[id]);
  const [showEditWinery, setShowEditWinery] = useState(false);
  const sessionUser = useSelector((state) => state.sessions.user);

  useEffect(() => {
    setShowEditWinery(false);
    dispatch(getOneWinery(id)); //?
  }, [id, dispatch]);

  let page = null;
  if (setShowEditWinery && sessionUser.id === winery?.ownerId) {
    page = <EditWineryForm hideForm={() => setShowEditWinery(false)} />;
  } else {
    page = (
      <>
        <h4>
          {winery?.User.firstName} {winery?.User.lastName}
        </h4>
        <p>
          {winery?.town}, {winery?.Region.name}
        </p>

        <ImageSlider images={winery?.Images} />

        <div className="varietals">
          <h4>Varietals</h4>
          {winery?.Varietals?.map((varietalObj) => {
            return (
              <span className="varietalButton" key={varietalObj.id}>
                {varietalObj.type}
              </span>
            );
          })}
        </div>

        <div className="styles">
          <h4>{winery?.name} makes</h4>
          {winery?.WineStyles?.map((styleObj) => {
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
          <p>{winery?.content}</p>
        </div>
      </>
    );
  }
  return (
    <div id="wineryPage">
      <h3>{winery?.name} </h3>
      {!showEditWinery && sessionUser.id === winery?.ownerId && (
        <button onClick={() => setShowEditWinery(true)}>Edit</button>
      )}
      <div>{page}</div>
    </div>
  );
};
