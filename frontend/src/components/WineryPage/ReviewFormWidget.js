import { useDispatch, useSelector } from "react-redux";
import reviewReducer, { getReviews, createReview, updateReview } from "../../store/review";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export const ReviewFormWidget = ({ wineryId, review, closeModal }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.sessions.user.id);

  const [rating, setRating] = useState(review ? review.rating : 0);
  const [content, setContent] = useState(review? review.content : "");
  const [errors, setErrors] = useState([]);

  const onNewSubmit = async (e) => {
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

  const onCancelClick = async (e) => {
    e.preventDefault();
    closeModal();
  };

  const onUpdateSubmit = async e => {
    e.preventDefault()
    setErrors([])
    const updatedReview={
      id: review.id,
      wineryId: review.wineryId,
      userId: review.userId,
      rating,
      content
    }
    const returnedReview = dispatch(updateReview(updatedReview))
    if(returnedReview) closeModal()

  }

  return (
    <div className="reviewWidget">
      {review && (
      <div className="cancel">
          <button className="cancelButton" onClick={onCancelClick}>
            X
          </button>
          </div>)}
      <div className="reviewWidgetHeader">
        {!review &&(<h4>Leave a Review</h4>)}
        <ReactStars
          count={5}
          onChange={setRating}
          size={40}
          isHalf={false}
          activeColor="#ff385c"
          value={rating}
          emptyIcon={<i className="fas fa-star"></i>}
          fullIcon={<i className="fas fa-star"></i>}
        />
      </div>
      <form onSubmit={review? onUpdateSubmit : onNewSubmit} id="reviewForm">
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
