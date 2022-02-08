
import dayjs from "dayjs";
import "./ReviewCard.css";

export const ReviewCard = ({ review }) => {
  let stars = [];
  for (let i = 0; i < review.rating; i++) {
    stars.push(i)
  }

  return (
    <div className="reviewCard">
      <div className="reviewHeader">
        <div>
          <h5>{review?.User.firstName}, {dayjs(review.createdAt).format("MMM YYYY")}</h5>
        </div>
        <div>
          {stars.map((star) => <i className="fas fa-star" key={star}></i>)}
        </div>
      </div>
      <div className="reviewFooter">
        {review.content}
      </div>
    </div>
  );
};
