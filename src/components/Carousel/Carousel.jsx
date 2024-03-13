import CarouselFunction from '../CarouselFunction/CarouselFunction';
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    "https://blog.es.playstation.com/tachyon/sites/14/2023/11/99051b1e7311396e149614be571ed2f0a6b1e0d2.png?resize=1088%2C612&crop_strategy=smart",
    "https://i.blogs.es/67cf47/xbox-one-ofertas-navidad/1366_2000.jpg",
    "https://regionps.com/wp-content/uploads/2021/12/OFERTAS-JUEGOS-PLAYSTATION-EN-GAME-del-23-12-2021-al-05-01-2022.jpg",
    "https://www.laps4.com/wp-content/uploads/2022/11/PS-Plus-Black-Friday.jpg",

  ];

  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = React.useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 2500);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [images.length]);

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    resetInterval();
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 5000);
  };

  return (
   <CarouselFunction
   images={images}
   currentImage={currentImage}
   handlePrev={handlePrev}
   handleNext={handleNext}
   />
  );  
};

export default Carousel;