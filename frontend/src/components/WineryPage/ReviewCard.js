import dayjs from "dayjs";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./ReviewCard.css";
import { ReviewFormWidget } from "./ReviewFormWidget";
import { deleteOneReview } from "../../store/review";

export const ReviewCard = ({ review }) => {
  const { id } = useSelector((state) => state.sessions.user);
  const dispatch = useDispatch()

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const afterOpenModal = () => console.log("afteropenmodal triggered");
  const closeModal = () => setModalIsOpen(false);
  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      border: "none",
      borderRadius: "12px",
      boxShadow: "rgb(0 0 0 / 12%) 0px 6px 16px",
      width: "700px"
    },
  };

  let stars = [];
  for (let i = 0; i < review.rating; i++) {
    stars.push(i);
  }

  return (
    <div className="reviewCard">
      <div className="reviewHeader">
        <div>
          <h5>
            {review?.User.firstName},{" "}
            {dayjs(review.createdAt).format("MMM YYYY")}
          </h5>
        </div>
        {review.userId === id && (
          <div>
            <button onClick={openModal} className="deleteButton">
              Edit
            </button>
            <button onClick={()=> dispatch(deleteOneReview(review.id))} className="deleteButton">
              Delete
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={modalStyle}
              ariaHideApp={false}
            >
              {/* {Modal.setAppElement(`${review.id}`)} */}

              <ReviewFormWidget
                key={`${review.id}`}
                review={review}
                closeModal={closeModal}
              />
            </Modal>
          </div>
        )}
        <div id="starRating">
          {stars.map((star) => (
            <i className="fas fa-star" key={star}></i>
          ))}
        </div>
      </div>
      <div className="reviewFooter">{review.content}</div>
    </div>
  );
};
