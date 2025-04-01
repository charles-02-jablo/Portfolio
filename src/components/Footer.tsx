
import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/charles-02-jablo", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/charles-jablo-7391552b4/", label: "LinkedIn" },
    { icon: <Mail size={20} />, url: "mailto:jane.doe@example.com", label: "Email" },
  ];

  return (
    <footer className="py-8 px-6 md:px-12 bg-navy-dark border-t border-slate-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-purple transition-colors duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="font-mono text-sm text-slate">
            <p>Designed & Built by Charles Vincent Jablo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
