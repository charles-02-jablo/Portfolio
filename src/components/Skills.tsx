
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Figma, Code2, Database, Globe, Cpu } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend Development",
    icon: <Code size={24} className="text-teal" />,
    skills: ["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS", "Redux"]
  },
  {
    name: "Backend Development",
    icon: <Database size={24} className="text-teal" />,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful APIs", "GraphQL"]
  },
  {
    name: "UI/UX Design",
    icon: <Figma size={24} className="text-teal" />,
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility"]
  },
  {
    name: "DevOps & Tools",
    icon: <Cpu size={24} className="text-teal" />,
    skills: ["Git/GitHub", "Docker", "CI/CD", "AWS", "Vercel", "Testing (Jest, Cypress)"]
  },
  {
    name: "Web Technologies",
    icon: <Globe size={24} className="text-teal" />,
    skills: ["Progressive Web Apps", "Responsive Design", "Web Performance", "SEO", "Web Accessibility", "Cross-Browser Compatibility"]
  },
  {
    name: "Programming Languages",
    icon: <Code2 size={24} className="text-teal" />,
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-navy-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">
          <span className="section-heading-number">02.</span> Skills
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-navy-light border-slate-dark hover:border-teal/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3 text-slate-light">{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center text-slate">
                      <span className="text-teal mr-2">▹</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
