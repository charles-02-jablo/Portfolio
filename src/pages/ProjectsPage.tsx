
import React from 'react';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <SocialLinks />
      
      <main className="pt-24">
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
