import React, { useState, useEffect } from 'react';
import './slideshow.css'; // Import your CSS file
import LightBox from '../lightbox/LightBox';
import product1 from "../../images/image-product-1.jpg";
import product2 from "../../images/image-product-2.jpg";
import product3 from "../../images/image-product-3.jpg";
import product4 from "../../images/image-product-4.jpg";
import product11 from "../../images/image-product-1-thumbnail.jpg";
import product12 from "../../images/image-product-2-thumbnail.jpg";
import product13 from "../../images/image-product-3-thumbnail.jpg";
import product14 from "../../images/image-product-4-thumbnail.jpg";

const SlideShow = () => {
  const largeImages = [product1, product2, product3, product4];
  const thumbnailImages = [product11, product12, product13, product14];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 60 * 16);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % largeImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + largeImages.length) % largeImages.length);
  };

  const handleLargeImageClick = () => {
    if (!isSmallScreen) {
      // Only open the LightBox on larger screens
      setShowLightBox(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 60 * 16);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`slideshow-container ${isSmallScreen ? 'small-screen' : ''}`}>
      <div className="slideshow">
        <img
          src={largeImages[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
          onClick={handleLargeImageClick}
        />
        {isSmallScreen && (
          <>
            <button className="prev" onClick={handlePrev}>
              &#10094;
            </button>
            <button className="next" onClick={handleNext}>
              &#10095;
            </button>
          </>
        )}
      </div>
      {!isSmallScreen && (
        <div className="thumbnails">
          {thumbnailImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
      {showLightBox && (
        <LightBox
          images={largeImages}
          currentIndex={currentIndex}
          onNext={handleNext}
          onPrev={handlePrev}
          onClose={() => setShowLightBox(false)}
          onThumbnailClick={(index) => setCurrentIndex(index)}
          thumbnailImages={thumbnailImages} // Pass thumbnailImages to LightBox
          isSmallScreen={isSmallScreen}
        />
      )}
    </div>
  );
};

export default SlideShow;
