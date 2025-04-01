import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Web Application",
    description: "A user-friendly web application that you can interact with your love ones, friends and other people.",
    tags: ["React", "MongoDB", "Tailwind CSS", "Node.js", "Express.js"],
    image: "/public/483508920_1825273774706923_7962818494673417491_n.png",
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Arduino",
    description: "A device that can track and scan your pulse rate.",
    tags: ["Arduino Components", "Pulse Rate Scanner", "Codes"],
    image: "/50fb8a38-0842-49cc-830b-302b7de285d7.jfif",
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Awesomtodos",
    description: "My First Technology Stack Experience",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    image: "/01.04.2025_00.29.02_REC.png",
    liveLink: "#",
    githubLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-900 text-white relative overflow-hidden">
      {/* Adding a stunning overlay with a gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-900 to-transparent opacity-40 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Name "Charles" in the upper left with a smooth fade-in animation */}
        <div className="absolute top-6 left-6 text-4xl font-bold text-teal-300 opacity-80 animate-fadeIn">
        
        </div>
        
        <h2 className="section-heading text-center text-4xl font-extrabold mb-12 text-teal-200">
          Projects
        </h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
            >
              {/* Project Image */}
              <div className="w-full md:w-7/12 mb-6 md:mb-0 transition-all duration-500 hover:scale-105">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block relative group">
                  <div className="absolute inset-0 bg-teal/20 rounded-md opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-0"></div>
                  <Card className="overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
                    <div className="relative h-64 w-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-700 to-transparent opacity-50"></div>
                      <div 
                        className="h-full w-full bg-cover bg-center transition-all duration-500"
                        style={{ 
                          backgroundImage: `url(${project.image})`, 
                          filter: 'brightness(1.3)' // Enhanced filter for a stunning lighter effect
                        }}
                      ></div>
                    </div>
                  </Card>
                </a>
              </div>
              
              {/* Project Info */}
              <div 
                className={`md:absolute z-10 md:w-7/12 ${index % 2 === 1 ? 'md:left-0 md:text-left' : 'md:right-0 md:text-right'}`}
              >
                <div className={`bg-navy-light p-6 rounded-md shadow-xl ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} md:max-w-md transform transition-all duration-500 hover:scale-105`}>
                  <p className="font-mono text-teal-300 text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-slate-light mb-4">{project.title}</h3>
                  <div className="text-slate mb-4">{project.description}</div>
                  <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? '' : 'md:justify-end'}`}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="font-mono text-xs text-slate-light bg-navy-dark px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? '' : 'md:justify-end'}`}>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="text-slate-light hover:text-teal">
                        <Github size={20} />
                      </Button>
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="text-slate-light hover:text-teal">
                        <ExternalLink size={20} />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
