import { LikeButton } from "../LikeButton";
import("./WineryCard.css");

export const WineryCard = ({ winery }) => {
  const imgObj = Object.values(winery.Images);

  const reviewArr = Object.values(winery.Reviews ? winery.Reviews : []);
  const ratings = [];
  for (let i = 0; i < reviewArr.length; i++) {
    ratings.push(reviewArr[i].rating);
  }

  const reviewAverage = ratings.reduce((a, b) => a + b, 0) / ratings.length;

  if (imgObj) {
    return (
      <div className="wineryCard">
        <div className="wineryCardImages" id={`${imgObj[0]?.wineryId}`}>
          <img
            src={`${imgObj[0]?.imageURL}`}
            alt={`${imgObj[0]?.id}`}
            width="300"
            height="200"
          ></img>
        </div>

        <div className="wineryCardDetails">
          <div className="topline">
            <div>
              <h6>{winery.Region.name}</h6>
              <h4>{winery.name}</h4>
              <hr />
              <h6>{winery.town}</h6>
            </div>
            <LikeButton wineryId={winery.id} />
          </div>
          <div className="varietals">
            {winery.Varietals?.map((varietalObj) => {
              return (
                <span className="cardVarietalButton" key={varietalObj.id}>
                  <i className="fas fa-wine-glass"></i> {varietalObj.type}{" "}
                </span>
              );
            })}
          </div>
          <div className="parties">
            <p>
              <i className="fas fa-star"></i>{" "}
              {reviewAverage ? reviewAverage.toPrecision(3) : 0} ·{" "}
              {reviewArr.length} reviews
            </p>
            <h6>Welcomes parties of up to {winery.maxGuests} guests </h6>
          </div>
        </div>
      </div>
    );
  }
};
