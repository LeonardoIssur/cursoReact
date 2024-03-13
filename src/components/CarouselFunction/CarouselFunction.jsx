import classes from "../Carousel/Carousel.module.css"
import directionleft from "../Carousel/assets/directionleft.svg"
import flechaizquierda from "../Carousel/assets/flechaizquierda.svg"



const CarouselFunction = ({ images, currentImage, handlePrev, handleNext}) => {
    return (
        <div className={classes.imageContainer} id="imgs">
            <button onClick={handlePrev} className={classes.btn}><img className={classes.imgsCarousel} src={directionleft} alt="" /></button>
            <img
            src={images[currentImage]}
            alt={`image-${currentImage + 1}`}
            />
            <button onClick={handleNext} className={classes.btn}><img className={classes.imgsCarousel} src={flechaizquierda} alt="" /></button>
        </div>
    );
};

export default CarouselFunction