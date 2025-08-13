import React, { useState } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  ChevronRight,
  Code2,
} from "lucide-react";

const educationData = [
  {
    id: 1,
    title: "Bachelor of Technology - Computer Science & Engineering",
    institution: "RGPV University",
    duration: "2021 - 2025",
    location: "Bhopal, Madhya Pradesh",
    description:
      "Pursuing a comprehensive program in Computer Science and Engineering with a strong focus on IoT, software development, and emerging technologies.",
    achievements: [
      "Specialized in Internet of Things (IoT) applications",
      "Developed multiple academic projects integrating hardware and cloud platforms",
      "Participated in inter-college hackathons and coding competitions",
    ],
    techStack: [
        { name: "IoT", icon: "📡" },
        { name: "Python", icon: "🐍" },
        { name: "C", icon: "🔵" },
        { name: "C++", icon: "💻" },
        { name: "DSA", icon: "🧩" },
        { name: "OOPs", icon: "📦" },
        { name: "Computer Networks (CN)", icon: "🌐" },
        { name: "Operating Systems (OS)", icon: "🖥️" },
      ]
  },
  {
    id: 2,
    title: "Higher Secondary Education",
    institution: "MPBSE",
    duration: "Completed in 2020",
    location: "Madhya Pradesh",
    description:
      "Completed higher secondary education with Physics, Chemistry, and Mathematics, building a strong foundation for engineering studies.",
    achievements: [
      "Secured distinction in Mathematics and Physics",
      "Actively participated in science exhibitions and tech fairs",
    ],
    techStack: [
      { name: "Mathematics", icon: "📐" },
      { name: "Physics", icon: "⚛️" },
      { name: "Chemistry", icon: "🧪" },
    ],
  },
];

const EducationDetails = () => {
  const [selectedEducation, setSelectedEducation] = useState(0);

  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <GraduationCap className="w-5 h-5" />
            Academic Background
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic journey in engineering and technology, with a strong
            emphasis on IoT and applied computer science.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={edu.id}
                  onClick={() => setSelectedEducation(index)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border-2 group ${
                    selectedEducation === index
                      ? "bg-white border-green-500 shadow-2xl scale-105 transform"
                      : "bg-white/80 backdrop-blur-sm border-gray-200 hover:border-green-300 hover:shadow-xl hover:scale-102"
                  }`}
                >
                  {/* Timeline Connector */}
                  {index !== educationData.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-green-300 to-transparent"></div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        selectedEducation === index
                          ? "bg-gradient-to-br from-green-500 to-teal-600 shadow-lg"
                          : "bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-green-100 group-hover:to-teal-100"
                      }`}
                    >
                      <GraduationCap
                        className={`w-6 h-6 ${
                          selectedEducation === index
                            ? "text-white"
                            : "text-gray-600 group-hover:text-green-600"
                        }`}
                      />
                    </div>
                  </div>

                  <h3
                    className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                      selectedEducation === index
                        ? "text-green-600"
                        : "text-gray-900 group-hover:text-green-600"
                    }`}
                  >
                    {edu.title}
                  </h3>
                  <p className="text-teal-600 font-semibold text-sm mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Details */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="bg-gradient-to-br from-green-600 via-teal-600 to-emerald-700 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3">
                    {educationData[selectedEducation].title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-6 text-green-100">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      <span className="font-medium">
                        {educationData[selectedEducation].institution}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{educationData[selectedEducation].duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <ChevronRight className="w-6 h-6 text-green-600" />
                    </div>
                    Key Highlights
                  </h4>
                  <div className="space-y-4">
                    {educationData[selectedEducation].achievements.map(
                      (achievement, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <Code2 className="w-6 h-6 text-teal-600" />
                    </div>
                    Technologies / Subjects
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {educationData[selectedEducation].techStack.map(
                      (tech, index) => (
                        <div
                          key={index}
                          className="group p-4 bg-gradient-to-br from-white to-gray-50 hover:from-green-50 hover:to-teal-50 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                              {tech.icon}
                            </span>
                            <span className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
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

export default EducationDetails;
