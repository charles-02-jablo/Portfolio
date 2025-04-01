
import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/charles-02-jablo", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/charles-jablo-7391552b4/", label: "LinkedIn" },
    { icon: <Mail size={20} />, url: "charlesjablo02@gmail.com", label: "Email" },
  ];

  return (
    <div className="fixed left-6 bottom-0 hidden md:block z-10">
      <div className="flex flex-col items-center">
        <div className="flex flex-col space-y-6">
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
        <div className="h-24 w-px bg-slate mt-6"></div>
      </div>
    </div>
  );
};

export default SocialLinks;
