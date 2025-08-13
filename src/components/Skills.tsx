"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/movingCards";

interface Skill {
  name: string;
  iconClass: string;
  link?: string;
}

const Skills: React.FC = () => {
  const skillsData: { [category: string]: Skill[] } = {
    languages: [
      { name: "C", iconClass: "ci ci-c" },
      { name: "C++", iconClass: "ci ci-cpp" },
      { name: "Python", iconClass: "ci ci-python" },
      { name: "JavaScript", iconClass: "ci ci-js" },
    ],
    frontend: [
      { name: "HTML", iconClass: "ci ci-html" },
      { name: "CSS", iconClass: "ci ci-css" },
      { name: "JavaScript", iconClass: "ci ci-js" },
      { name: "TypeScript", iconClass: "ci ci-ts" },
      { name: "React.js", iconClass: "ci ci-react" },
      { name: "Tailwind CSS", iconClass: "ci ci-tailwindcss" },
      { name: "Bootstrap", iconClass: "ci ci-bootstrap" },
      { name: "MUI", iconClass: "ci ci-mui" },
    ],
    backend: [
      { name: "Node.js", iconClass: "ci ci-nodejs" },
      { name: "Express.js", iconClass: "ci ci-expressjs" },
      { name: "Python", iconClass: "ci ci-python" },
      { name: "MongoDB", iconClass: "ci ci-mongodb" },
      { name: "MySQL", iconClass: "ci ci-mysql" },
      { name: "DynamoDB", iconClass: "ci ci-dynamodb" },
      { name: "NeonDB", iconClass: "ci ci-neondb" },
      { name: "OpenCV", iconClass: "ci ci-opencv" },
    ],
    cloud: [
      { name: "AWS", iconClass: "ci ci-aws" },
      { name: "Lambda", iconClass: "ci ci-lambda" },
      { name: "ECS", iconClass: "ci ci-ecs" },
      { name: "S3", iconClass: "ci ci-s3" },
      { name: "CI/CD", iconClass: "ci ci-cicd" },
      { name: "Docker", iconClass: "ci ci-docker" },
    ],
    services: [
      { name: "Microservices", iconClass: "ci ci-microservices" },
      { name: "API Gateway", iconClass: "ci ci-api-gateway" },
      { name: "API Integrations", iconClass: "ci ci-api" },
    ],
    productivity: [
      { name: "Git", iconClass: "ci ci-git" },
      { name: "GitHub", iconClass: "ci ci-github" },
      { name: "Postman", iconClass: "ci ci-postman" },
      { name: "VS Code", iconClass: "ci ci-vscode" },
      { name: "Netlify", iconClass: "ci ci-netlify" },
      { name: "Render", iconClass: "ci ci-render" },
      { name: "Google Colab", iconClass: "ci ci-colab" },
      { name: "Figma", iconClass: "ci ci-figma" },
    ],
    };

  const renderSkills = (skills: Skill[]) => {
    return skills.map((skill, index) => (
      <div
        key={index}
        className="bg-gray-100 flex justify-center gap-4 items-center py-3 rounded-[5px] shadow-md ring-2 ring-white ring-opacity-75 select-none"
      >
        {skill.iconClass.startsWith("ci") ? (
          <i className={`${skill.iconClass} ci-2x`}></i>
        ) : (
          <img className="w-8 h-8" src={`${skill.iconClass}`} alt={skill.name} />
        )}
        <span className="md:text-base text-sm text-gray-800">{skill.name}</span>
      </div>
    ));
  };

  return (
    <div className="w-full">
      <h2 className="md:text-3xl text-2xl mb-8 text-gray-800 font-bold pb-5 border-b-[1px] border-gray-300">
        Tech Stack
      </h2>

      {/* Desktop View */}
      <div className="md:grid hidden gap-10">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="md:text-xl text-lg text-gray-800 my-4 capitalize">
              {category.replace(/([a-z])([A-Z])/g, "$1 $2")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {renderSkills(skills)}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden block w-full">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="font-bold text-lg text-gray-800 mt-4 capitalize">
              {category.replace(/([a-z])([A-Z])/g, "$1 $2")}
            </h3>
            <InfiniteMovingCards items={skills} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
