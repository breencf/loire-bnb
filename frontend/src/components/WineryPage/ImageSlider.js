import { useState } from "react";

export const ImageSlider = ({ images }) => {
  let [index, setIndex] = useState(0);

  let slideRight = () => {
    let nextIndex = index + 1
    if(nextIndex === images?.length -1) {
      setIndex(0)
    }
    else setIndex(nextIndex)
  };
  let slideLeft = () => {
    let nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images?.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };
  return(
    <>
    {images?.length > 0 && (
      <div className="imageSlider">
        <button id="leftButton" onClick={slideLeft}>{"<"}</button>
        <img src={images[index].imageURL} alt={index} />
        <button id="rightButton" onClick={slideRight}>{">"}</button>
      </div>
    )}
    </>
  );
};
