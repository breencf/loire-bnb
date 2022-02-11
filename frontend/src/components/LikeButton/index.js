import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { likeButton, loadLikes } from "../../store/like";
import { LoginForm } from "../LoginFormModal/LoginForm";
import { useHistory } from "react-router-dom";
import("./LikeButton.css");

export const LikeButton = ({ wineryId }) => {
  const dispatch = useDispatch();
  const { userLikes } = useSelector((state) => state.like);
  const id = useSelector((state) => state.sessions?.user?.id);
  const [liked, setLiked] = useState(false);
  const history = useHistory();
  const onClick = async (e) => {
    e.preventDefault();
    if (id) {
      setLiked(!liked);
      dispatch(loadLikes(id));
      dispatch(likeButton({ userId: id, winery: wineryId }));
    } else {
      history.push("/signup")
    }
  };

  // useEffect(() => {
  //   dispatch(loadLikes(id));
  // }, [dispatch]);

  useEffect(() => {
    userLikes[wineryId] ? setLiked(true) : setLiked(false);
  }, [userLikes]);

  return (
    <div>
      <button
        id="likeButton"
        type="button"
        onClick={onClick}
        className={liked ? "buttonLiked" : "buttonNotLiked"}
      >
        <i className="fas fa-heart"></i>
      </button>
    </div>
  );
};
