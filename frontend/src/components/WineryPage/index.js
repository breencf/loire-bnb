import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ImageSlider } from "./ImageSlider";
import { useEffect, useState } from "react";
import { getOneWinery } from "../../store/winery";
import { EditWineryForm } from "../EditWineryForm";
import { deleteWinery } from "../../store/winery";
import { LikeButton } from "../LikeButton";
import("./WineryPage.css");

export const WineryPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const winery = useSelector((state) => state.wineries[id]);
  const [showEditWinery, setShowEditWinery] = useState(false);
  const sessionUser = useSelector((state) => state.sessions.user);

  const setDelete = () => {
    dispatch(deleteWinery(id));
  };

  useEffect(() => {
    setShowEditWinery(false);
    dispatch(getOneWinery(id)); //?
  }, [id, dispatch]);

  useEffect(() => {
    setShowEditWinery(false);
  }, []);

  let page = null;

  if (showEditWinery && sessionUser.id === winery?.ownerId) {
    page = <EditWineryForm hideForm={() => setShowEditWinery(false)} />;
  } else {
    page = (
      <>
        <h4>
          Hosted by {winery?.User?.firstName} {winery?.User?.lastName} in{" "}
          {winery?.town}, {winery?.Region.name}
        </h4>

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
          <div className="styleButtons">
            {winery?.WineStyles?.map((styleObj) => {
              return (
                <span className="styleButton" key={styleObj.id}>
                  <span className={`styledot-${styleObj.id}`}>
                    <i className="fas fa-circle"></i>
                  </span>
                  {styleObj.type}
                </span>
              );
            })}
          </div>
        </div>
        <div>
          <h4>About</h4>
          <p>{winery?.content}</p>

        </div>
      </>
    );
  }
  return (
    <div className="wineryPage">
      <ImageSlider images={winery?.Images} />
      <div id="wineryContainer">
        <div className="wineryContainerTitle">
          <h3>{winery?.name} </h3> <LikeButton wineryId={winery?.id} />

          {!showEditWinery && sessionUser.id === winery?.ownerId && (
            <div>
              <button
                onClick={() => setShowEditWinery(true)}
                className="submitButton"
              >
                Edit
              </button>
              <button onClick={setDelete} className="deleteButton">
                Delete Winery
              </button>
            </div>
          )}
        </div>
        <hr className="full" />

        <div>{page}</div>
      </div>
    </div>
  );
};
