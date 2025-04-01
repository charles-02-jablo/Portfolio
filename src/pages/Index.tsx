import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';
import StarBackground from '@/components/Starbackground';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <StarBackground />
      <Navbar />
      <SocialLinks />
      
      <main className="relative z-10">
        <Hero />
        
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col items-center justify-center text-center md:text-left md:items-start">
                <h2 className="text-2xl font-semibold text-slate-light mb-4">Explore My Portfolio</h2>
                <p className="text-slate mb-8">
                  Navigate through the different sections to learn more about my background, 
                  experience, projects, and how to get in touch. Each page offers detailed 
                  information about my work and professional journey.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link to="/about">
                    <Button className="bg-transparent hover:bg-blue-500/10 text-blue-400 border border-blue-400 rounded flex items-center gap-2">
                      About Me <ArrowRight size={16} />
                    </Button>
                  </Link>
                  <Link to="/experience">
                    <Button className="bg-transparent hover:bg-blue-500/10 text-blue-400 border border-blue-400 rounded flex items-center gap-2">
                      Experience <ArrowRight size={16} />
                    </Button>
                  </Link>
                  <Link to="/projects">
                    <Button className="bg-transparent hover:bg-blue-500/10 text-blue-400 border border-blue-400 rounded flex items-center gap-2">
                      Projects <ArrowRight size={16} />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button className="bg-transparent hover:bg-blue-500/10 text-blue-400 border border-blue-400 rounded flex items-center gap-2">
                      Contact <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="hidden md:flex justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 border-2 border-blue-400 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/484452285_2114927015645322_9156363450058784118_n.jpg" alt="CHARLES" className="w-full h-full object-cover rounded-full border-4 border-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
