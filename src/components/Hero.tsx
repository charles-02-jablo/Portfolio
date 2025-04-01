import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 px-6 md:px-12 relative overflow-hidden bg-gradient-to-br from-teal-700 via-indigo-900 to-purple-900"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="space-y-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="font-mono text-teal">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-light">Charles Vincent Jablo.</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate">I create things for the web.</h2>
          <p className="text-slate max-w-xl text-lg py-6">
            I’m a Frontend Developer passionate about crafting beautiful, responsive, and user-centric web experiences.
            I specialize in modern JavaScript frameworks like React. I love turning designs into fast, accessible,
            and interactive applications. With a keen eye for detail and a focus on performance, 
            I thrive on building seamless UIs that users love.
          </p>
          <div className="flex space-x-4 pt-4">
            <Button 
              className="bg-transparent hover:bg-teal/10 text-teal border border-teal rounded px-8 py-6"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
            <Button 
              variant="ghost" 
              className="text-slate-light hover:text-teal group"
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="mr-2">See more</span>
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-cover bg-center bg-opacity-30 bg-blur-3xl filter z-0" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-indigo-900 to-purple-900 opacity-50 z-0"></div>
    </section>
  );
};

export default Hero;
