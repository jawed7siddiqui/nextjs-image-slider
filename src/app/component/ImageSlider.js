"use client";

// components/ImageSlider.js
import { useState } from 'react';

const slides = [
  'https://via.placeholder.com/600x300?text=Slide+1',
  'https://via.placeholder.com/600x300?text=Slide+2',
  'https://via.placeholder.com/600x300?text=Slide+3'
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide}>Previous</button>
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}
