import { useDispatch, useSelector } from "react-redux";
import reviewReducer, {
  getReviews,
  createReview,
  updateReview,
} from "../../store/review";
import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";

export const ReviewFormWidget = ({ wineryId, review, closeModal }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.sessions.user.id);

  const [rating, setRating] = useState(review ? review.rating : 0);
  const [content, setContent] = useState(review ? review.content : "");
  const [submitText, setSubmitText] = useState(review ? "Update" : "Submit");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setSubmitText(review ? "Update" : "Submit")
  }, [rating, content])

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
      setSubmitText("Submitted!");
      setRating(0)
      setContent("")
    }
  };

  const onCancelClick = async (e) => {
    e.preventDefault();
    closeModal();
  };

  const onUpdateSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const updatedReview = {
      id: review.id,
      wineryId: review.wineryId,
      userId: review.userId,
      rating,
      content,
    };
    setSubmitText("Updated!");
    const returnedReview = dispatch(updateReview(updatedReview));
    if (returnedReview) closeModal();
  };

  return (
    <div className="reviewWidget">
      {review && (
        <div className="cancel">
          <button className="cancelButton" onClick={onCancelClick}>
            X
          </button>
        </div>
      )}
      <div className="reviewWidgetHeader">
        {!review && <h4>Leave a Review</h4>}
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
      <div className="noRatingError">
          {!rating && content && <p>Please select a star rating</p>}
        </div>
      <form onSubmit={review ? onUpdateSubmit : onNewSubmit} id="reviewForm">
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
        <button className={!rating && !content.length ? "submitButton" : "deleteButton"} disabled={rating? false: true}>{submitText}</button>
      </form>
    </div>
  );
};
