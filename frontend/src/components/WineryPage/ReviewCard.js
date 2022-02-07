// User: {id: 1, email: 'didier@dagueneau.com', firstName: 'Didier', lastName: 'Dagueneau', profileImage: ''}
// content: "Had a lovely time -- would highly recommend"
// createdAt: "2022-02-07T18:55:07.946Z"
// id: 1
// rating: 5
// title: "delicious and well priced!"
// updatedAt: "2022-02-07T18:55:07.946Z"
// userId: 1
// wineryId: 2
import dayjs from "dayjs";
import "./ReviewCard.css";

export const ReviewCard = ({ review }) => {
  let stars = [];
  for (let i = 0; i < review.rating; i++) {
    stars.push("star")
  }

  return (
    <div className="reviewCard">
      <div className="reviewHeader">
        <div>
          <h5>{review.User.firstName}, {dayjs(review.createdAt).format("MMM YYYY")}</h5>
        </div>
        <div>
          {/* {stars} */}
          {stars.map((star) => <i className="fas fa-star"></i>)}
        </div>
      </div>
      <div className="reviewFooter">
        {review.content}
      </div>
    </div>
  );
};
