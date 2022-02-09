import { useState } from "react";

export const ImageSlider = ({ images }) => {
  let [index, setIndex] = useState(0);

  let slideRight = () => {
    let nextIndex = index + 1
    if(nextIndex === images?.length) {
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
    {images?.length > 1 && (
      <div className="imageSlider">
        <button id="leftButton" onClick={slideLeft}>{"<"}</button>
        <img src={images[index]?.imageURL} alt={index} />
        <button id="rightButton" onClick={slideRight}>{">"}</button>
      </div>
    )}
      {images?.length < 2 && (
      <div className="imageSlider">
        <img src={images[index]?.imageURL} alt={index} />
      </div>
    )}
    </>
  );
};
