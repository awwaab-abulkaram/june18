import React, { useEffect } from 'react';
import Navbar2 from './Navbar2';
import './Gallery.css'

const Slideshow = () => {
  // Import all images from the 'Assets/minecraft' folder dynamically
  const importAll = (r) => {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../Assets/minecraft', false, /\.(png|jpe?g|svg)$/));

  // Captions for each image
  const captions = [
    'Caption for image 1',
    'Caption for image 2',
    'Caption for image 3',
    // Add more captions as needed
  ];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Function to move to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <Navbar2/>
        <div className="slideshow-container">
      {/* Render the current image and caption */}
      <div className="slideshow-item">
        <img className="slideshow-image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <div className="caption">{captions[currentIndex]}</div>
      </div>

      {/* Previous and Next buttons */}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
    </div>
  );
};

export default Slideshow;
