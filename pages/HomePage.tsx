import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import BlogPreview from '../components/BlogPreview';
import PracticePreview from '../components/PracticePreview';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <PracticePreview />
      <BlogPreview />
      <ContactSection />
      <Testimonials />
    </>
  );
};

export default HomePage;