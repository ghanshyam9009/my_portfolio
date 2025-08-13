import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Zap,
  CheckCircle,
  Clock,
  Filter,
  Star,
  ArrowRight,
  Play,
} from "lucide-react";
import { projectsData } from "../lib/data.js";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: {
    name: string;
    icon: string;
    color: string;
  }[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  features: string[];
  category: string;
  status: string;
};

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ["All", "Full Stack", "Education", "E-commerce"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Star className="w-5 h-5" />
            Portfolio Showcase
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            A curated collection of projects showcasing my expertise in modern
            web development, from innovative concepts to polished
            implementations.
          </p>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`group px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filter === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/25"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-200 hover:border-purple-300"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:scale-105"
            >
              {/* Enhanced Project Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${
                      project.status === "Completed"
                        ? "bg-green-500/90 text-white shadow-lg shadow-green-500/25"
                        : "bg-orange-500/90 text-white shadow-lg shadow-orange-500/25"
                    }`}
                  >
                    {project.status === "Completed" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Clock className="w-4 h-4" />
                    )}
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90  text-purple-800 rounded-full text-sm font-bold shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Enhanced Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <button
                    onClick={() => openModal(project)}
                    className="bg-white/95 hover:bg-white text-gray-900 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
                  >
                    <Eye className="w-6 h-6" />
                  </button>
                  <a
                    href={project.demoUrl}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
                  >
                    <Play className="w-6 h-6" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="bg-gray-900 hover:bg-black text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-purple-600 font-semibold text-lg">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Enhanced Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 uppercase tracking-wide">
                    <Zap className="w-4 h-4 text-purple-600" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.slice(0, 2).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 ${tech.color}`}
                      >
                        <span className="text-lg">{tech.icon}</span>
                        {tech.name}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 rounded-full text-sm font-semibold">
                        +{project.techStack.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Eye className="w-5 h-5" />
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                  <a
                    href={project.demoUrl}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-lg z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Enhanced Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110"
                >
                  ✕
                </button>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold ${
                        selectedProject.status === "Completed"
                          ? "bg-green-500 text-white"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      {selectedProject.status}
                    </span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-white/90 text-xl">
                    {selectedProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Enhanced Modal Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Code className="w-6 h-6 text-purple-600" />
                      </div>
                      About This Project
                    </h4>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {selectedProject.longDescription}
                    </p>

                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      Key Features
                    </h4>
                    <ul className="space-y-4 mb-8">
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-700 p-3 bg-gray-50 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Zap className="w-6 h-6 text-blue-600" />
                      </div>
                      Technologies Used
                    </h4>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {selectedProject.techStack.map((tech, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-xl ${tech.color} flex items-center gap-3 hover:scale-105 transition-transform duration-200`}
                        >
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="font-semibold">{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={selectedProject.demoUrl}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <Play className="w-5 h-5" />
                        Live Demo
                      </a>
                      <a
                        href={selectedProject.githubUrl}
                        className="flex-1 bg-gray-900 hover:bg-black text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <Github className="w-5 h-5" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
