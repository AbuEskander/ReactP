import React from "react";
import IMAGES from "../data/images";
import ImageShadow from "react-image-shadow";
import "react-image-shadow/assets/index.css";

const Gallary = () => {
  return (
    <div>
      {IMAGES.map((Img) => {
        return <Image iMg={Img} />;
      })}
    </div>
  );
};

const Image = ({ iMg }) => {
  return (
    <div className="gallery">
      <a href={iMg.images} target="_blank" className="img" rel="noreferrer">
        <ImageShadow src={iMg.images} />
        <p>{iMg.desC}</p>
      </a>
    </div>
  );
};
export default Gallary;
