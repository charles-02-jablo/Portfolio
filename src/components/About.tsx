import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-4xl font-extrabold mb-6 text-teal-200">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-4 text-white">
            <p>
              Hi, I’m Charles Vincent Jablo — a Frontend Developer with a passion for building beautiful, responsive, and intuitive web experiences. I specialize in React and modern JavaScript frameworks, transforming designs into fast, accessible, and interactive applications.
            </p>
            <p>
              With a sharp eye for detail and a focus on performance, I thrive on crafting seamless UIs that users love. Whether it’s pixel-perfect layouts, smooth animations, or clean code, I believe great frontend development bridges creativity and functionality.
            </p>
            <p>
              When I’m not coding, you’ll find me exploring new tools, contributing to open-source projects, or sipping coffee while brainstorming my next idea.
            </p>
            <p className="text-white font-semibold pt-4">
              Here are a few technologies I've been working with recently:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Tailwind CSS'].map((tech) => (
                <div key={tech} className="flex items-center">
                  <span className="text-teal mr-2">▹</span>
                  <span className="font-mono text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-teal/20 rounded-md blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <Card className="relative rounded-md overflow-hidden w-72 h-72 bg-navy-light border border-teal/20">
                <CardContent className="p-0 h-full">
                  <div className="w-full h-full bg-slate-dark/40 group-hover:bg-transparent transition-colors duration-300 relative">
                    {/* Lighter image with opacity and brightness adjustment */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal/30 to-navy/80 mix-blend-multiply"></div>
                    <div className="h-full w-full bg-[url(/484452285_2114927015645322_9156363450058784118_n.jpg)] bg-cover bg-center" style={{
                        filter: 'brightness(1.5)'  // This will brighten the image
                    }}></div>
                  </div>
                </CardContent>
              </Card>   
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
