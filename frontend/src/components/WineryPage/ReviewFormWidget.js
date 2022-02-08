import { useDispatch, useSelector } from "react-redux";
import { getReviews, createReview } from "../../store/review";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export const ReviewFormWidget = ({ wineryId }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.sessions.user.id);

  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const review = {
      userId,
      wineryId,
      rating,
      content,
    };
    const newReview = dispatch(createReview(review));
    if (newReview) {
      dispatch(getReviews(wineryId));
    }
  };

  return (
    <div className="reviewWidget">
      <div className="reviewWidgetHeader">
        <h4>Leave a Review</h4>
        <ReactStars
          count={5}
          onChange={setRating}
          size={40}
          isHalf={false}
          activeColor="#ff385c"
          emptyIcon={<i className="fas fa-star"></i>}
          halfIcon={<i className="fas fa-star"></i>}
          fullIcon={<i className="fas fa-star"></i>}
        />
      </div>
      <form onSubmit={onSubmit} id="reviewForm">
        <div>
          <label htmlFor="content"></label>
          <textarea
            id="content"
            label="textarea"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            required
          />
        </div>
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
};
