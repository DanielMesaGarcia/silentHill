import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MyCarousel(props) {
  const { images } = props;

  return (
    <div>
      {(
        <Carousel autoPlay={true} interval={500}>
          {images.map((imagePath, index) => (
            <div key={index}>
              <img src={imagePath} alt={`Image ${index + 1}`} />
              <p className="legend">Legend {index + 1}</p>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default MyCarousel;
