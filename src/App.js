import React from 'react';
import { useState } from 'react';
import './style.css';

const images = [
  ' https://images.pexels.com/photos/13685389/pexels-photo-13685389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ',
  'https://images.pexels.com/photos/15072715/pexels-photo-15072715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ',
  'https://images.pexels.com/photos/15008807/pexels-photo-15008807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <>
      <h1>Hello StackBlitz!</h1>
      <div className="nextslide" onclick={nextSlide}>
        +
      </div>
      <div className="prevslide" onclick={prevSlide}>
        -
      </div>

      {images.map(
        (image, index) =>
          current === index && (
            <div key={image} className="slide">
              <img src={image} alt="images" />
            </div>
          )
      )}
    </>
  );
}
