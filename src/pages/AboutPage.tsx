
import React from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <SocialLinks />
      
      <main className="pt-24">
        <About />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
