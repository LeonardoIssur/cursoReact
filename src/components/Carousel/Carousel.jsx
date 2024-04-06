import React from 'react';
import classes from "./Carousel.module.css";
import directionleft from "./assets/directionleft.png";
import flechaizquierda from "./assets/flechaizquierda.png";

const Carousel = ({ images, currentImage, handlePrev, handleNext }) => {
  return (
    <div className={classes.imageContainer} id="imgs">
      <button onClick={handlePrev} className={classes.btnleft}><img className={classes.imgsCarousel} src={directionleft} alt="" /></button>
      <img src={images[currentImage]} alt={`image-${currentImage + 1}`} className={classes.imgCarousel}/>
      <button onClick={handleNext} className={classes.btnright}><img className={classes.imgsCarousel} src={flechaizquierda} alt="" /></button>
    </div>
  );
};

export default Carousel;