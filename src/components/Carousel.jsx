import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../Helpers/CarouselData";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Carousel = () => {
  const [currImage, setCurrImage] = useState(0);
  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImage].img})` }}
      >
        <div
          className="left"
          onClick={() => currImage > 0 && setCurrImage(currImage - 1)}
        >
          <ArrowBackIos />
        </div>
        <div className="center">
          <h1>{images[currImage].title}</h1>
          <p>{images[currImage].subtitle}</p>
        </div>
        <div
          className="right"
          onClick={() =>
            currImage > images.length - 1 && setCurrImage(currImage + 1)
          }
        >
          <ArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
