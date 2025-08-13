import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  Building2,
  Clock,
  Award,
  Briefcase,
  Code2,
} from "lucide-react";
import { experienceData } from "../lib/data.js";

const ExperienceDetails = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Briefcase className="w-5 h-5" />
            Professional Journey
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey in web development, building scalable
            applications and mastering cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div
                  key={exp.id}
                  onClick={() => setSelectedExperience(index)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border-2 group ${
                    selectedExperience === index
                      ? "bg-white border-blue-500 shadow-2xl scale-105 transform"
                      : "bg-white/80 backdrop-blur-sm border-gray-200 hover:border-blue-300 hover:shadow-xl hover:scale-102"
                  }`}
                >
                  {/* Timeline Connector */}
                  {index !== experienceData.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-blue-300 to-transparent"></div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        selectedExperience === index
                          ? "bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
                          : "bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-blue-100 group-hover:to-purple-100"
                      }`}
                    >
                      <Building2
                        className={`w-6 h-6 ${
                          selectedExperience === index
                            ? "text-white"
                            : "text-gray-600 group-hover:text-blue-600"
                        }`}
                      />
                    </div>
                    <span
                      className={`px-4 py-2 rounded-full text-nowrap text-xs font-bold uppercase tracking-wide ${
                        exp.type === "Full-time"
                          ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg"
                          : "bg-gradient-to-r from-orange-400 to-amber-500 text-white shadow-lg"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <h3
                    className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                      selectedExperience === index
                        ? "text-blue-600"
                        : "text-gray-900 group-hover:text-blue-600"
                    }`}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-purple-600 font-semibold text-sm mb-3">
                    {exp.company}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Header with Gradient */}
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-3">
                        {experienceData[selectedExperience].title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-6 text-blue-100">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-5 h-5" />
                          <span className="font-medium">
                            {experienceData[selectedExperience].company}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          <span>
                            {experienceData[selectedExperience].duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`px-4 py-2 rounded-full text-nowrap text-sm font-bold ${
                        experienceData[selectedExperience].type === "Full-time"
                          ? "bg-green-500/20 text-green-100 border border-green-400/30"
                          : "bg-orange-500/20 text-orange-100 border border-orange-400/30"
                      }`}
                    >
                      {experienceData[selectedExperience].type}
                    </div>
                  </div>

                  <p className="text-blue-100 text-lg leading-relaxed">
                    {experienceData[selectedExperience].description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Key Responsibilities */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <ChevronRight className="w-6 h-6 text-blue-600" />
                    </div>
                    Key Responsibilities
                  </h4>
                  <div className="space-y-4">
                    {experienceData[selectedExperience].responsibilities.map(
                      (responsibility, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">
                            {responsibility}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Code2 className="w-6 h-6 text-purple-600" />
                    </div>
                    Technologies Used
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {experienceData[selectedExperience].techStack.map(
                      (tech, index) => (
                        <div
                          key={index}
                          className="group p-4 bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-purple-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                              {tech.icon}
                            </span>
                            <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                              {tech.name}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDetails;
