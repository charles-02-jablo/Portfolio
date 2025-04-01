
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';
import Experience from '@/components/Experience';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <SocialLinks />
      
      <main className="pt-24">
        <Experience />
      </main>
      
      <Footer />
    </div>
  );
};

export default ExperiencePage;
