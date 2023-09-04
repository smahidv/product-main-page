import React from 'react';
import './lightbox.css';
import { FaTimes } from 'react-icons/fa';

const LightBox = ({
  images,
  currentIndex,
  onNext,
  onPrev,
  onClose,
  onThumbnailClick,
  thumbnailImages,
  isSmallScreen,
}) => {
  const handleNext = () => {
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  return (
    <div className="lightbox-container" onClick={onClose}>
      <div className="lightbox-subContainer">
        <div className="lightbox" onClick={(e) => e.stopPropagation()}>
          <img src={images[currentIndex]} alt={`Product ${currentIndex + 1}`} />
          {!isSmallScreen && (
            <>
              <button className="prev red" onClick={handlePrev}>
                &#10094;
              </button>
              <button className="next" onClick={handleNext}>
                &#10095;
              </button>
            </>
          )}
          {thumbnailImages && thumbnailImages.length > 0 && (
            <div className="lightbox-thumbnails">
              {thumbnailImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  className={`lightbox-thumbnail ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => onThumbnailClick(index)}
                />
              ))}
            </div>
          )}
          <button className="close-button" onClick={onClose}>
            <FaTimes color="var(--Orange)" size="1em" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
