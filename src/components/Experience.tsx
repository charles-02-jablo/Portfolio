import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

const experienceData = [
  {
    title: "Senior Frontend Developer",
    company: "Microsoft Company",
    period: "2030 - Present",
    location: "Redmond, Washington, United States",
    description: [
      "Managed a team of five developers to develop a cutting-edge React-based dashboard, serving over 10,000 customers.",
      "Designed and integrated CI/CD pipelines, cutting deployment time by 50%.",
      "Enhanced application performance by decreasing load times by 70%.",
      "Worked closely with design and product teams to develop and integrate new features."
    ],
    icon: <Briefcase className="h-10 w-10 text-teal" />
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions",
    period: "2027 - 2028",
    location: "Manila, Philippines",
    description: [
      "Created responsive web applications utilizing React, TypeScript, and Tailwind CSS.",
      "Designed and implemented RESTful APIs using Node.js and Express.",
      "Guided junior developers and conducted code reviews."
    ],
    icon: <Briefcase className="h-10 w-10 text-teal" />
  },
  {
    title: "Web Development Intern",
    company: "StartUp Hub",
    period: "2027 - 2030",
    location: "Quezon City, Manila",
    description: [
      "Contributed to the development of the company website and e-commerce platform.",
      "Developed responsive designs with HTML, CSS, and JavaScript.",
      "Worked alongside senior developers on multiple projects.",
      "Engaged in daily stand-ups and sprint planning sessions."
    ],
    icon: <Briefcase className="h-10 w-10 text-teal" />
  },
  {
    title: "B.S. Information Technology",
    company: "Western Institute of Technology",
    period: "2024 - 2028",
    location: "Lapaz, Iloilo City",
    description: [
      "Focused on web development, algorithms, and data structures.",
      "Completed thesis on 'Modern Web Development Frameworks'.",
    ],
    icon: <GraduationCap className="h-10 w-10 text-teal" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-4xl font-extrabold mb-6 text-teal-200">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <Card key={index} className="bg-navy-light border-slate-dark hover:border-teal/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h3 className="text-xl font-semibold text-slate-light">{item.title}</h3>
                      <span className="text-teal font-medium">@ {item.company}</span>
                    </div>
                    <div className="flex items-center text-slate">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.period}</span>
                      <span className="mx-2">•</span>
                      <span>{item.location}</span>
                    </div>
                    <ul className="space-y-2 mt-3">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="flex text-slate">
                          <span className="text-teal mr-2">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
