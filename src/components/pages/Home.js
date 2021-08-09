import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import First from '../First';
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';

export default function Home() {
  return (
    <>
      <HeroSection />
      <First/>
      <ImageSlider slides={SliderData} />
      <Footer />
    </>
  );
}
