
import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <SocialLinks />
      
      <main className="pt-24">
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
