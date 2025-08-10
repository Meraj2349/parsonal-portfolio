"use client";

import { useTheme } from "../../contexts/ThemeContext";

export default function Experience() {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "SUST Software Engineering Department",
      location: "Sylhet, Bangladesh",
      period: "Jan 2024 - Present",
      type: "Academic Project",
      description:
        "Working on various software engineering projects as part of the undergraduate program. Focusing on full-stack development, database management, and software design patterns while collaborating with peers on complex technical challenges.",
      responsibilities: [
        "Developed full-stack web applications using React.js and Node.js",
        "Implemented database solutions with PostgreSQL and MongoDB",
        "Collaborated on academic projects using agile methodologies",
        "Participated in code reviews and technical discussions",
        "Mentored junior students in programming concepts",
      ],
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "JavaScript",
        "TypeScript",
        "Express.js",
      ],
      companyLogo: "/api/placeholder/80/80",
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Independent Projects",
      location: "Remote",
      period: "Jun 2023 - Present",
      type: "Freelance",
      description:
        "Working as a freelance developer creating modern web applications for various clients. Specializing in e-commerce platforms, educational management systems, and custom web solutions with focus on user experience and performance.",
      responsibilities: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Developed e-commerce platforms with payment gateway integration",
        "Created educational management systems for schools and institutions",
        "Implemented real-time features using Socket.io",
        "Provided ongoing maintenance and feature updates",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
      ],
      companyLogo: "/api/placeholder/80/80",
    },
    {
      title: "Competitive Programming Enthusiast",
      company: "Online Coding Platforms",
      location: "Global Community",
      period: "Jan 2022 - Present",
      type: "Self-Development",
      description:
        "Active participant in competitive programming contests across multiple platforms. Solved 500+ problems focusing on data structures, algorithms, and problem-solving techniques. Regular contributor to coding communities and peer learning.",
      responsibilities: [
        "Solved algorithmic problems on LeetCode, Codeforces, and CodeChef",
        "Participated in weekly programming contests and hackathons",
        "Mentored fellow students in competitive programming techniques",
        "Contributed to open-source algorithm implementations",
        "Developed efficient solutions for complex computational problems",
      ],
      technologies: [
        "C++",
        "Python",
        "Java",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "Mathematics",
      ],
      companyLogo: "/api/placeholder/80/80",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-4">💼</span>
            <h1 className="text-4xl md:text-5xl font-bold">Experience</h1>
          </div>
          <p
            className={`text-lg max-w-3xl ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            My professional journey and work experiences that have shaped my
            career in software development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-black hidden md:block"></div>

                {/* Experience Card */}
                <div
                  className={`md:ml-20 rounded-2xl overflow-hidden border ${
                    isDarkMode
                      ? "bg-gray-900/50 border-gray-800/50"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Company Logo Section */}
                    <div
                      className={`lg:w-64 h-48 lg:h-auto flex items-center justify-center relative ${
                        isDarkMode
                          ? "bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-gray-900"
                          : "bg-gradient-to-br from-blue-100 via-purple-100 to-gray-100"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                      <div className="text-center relative z-10">
                        <div
                          className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                            isDarkMode ? "bg-gray-800" : "bg-white"
                          }`}
                        >
                          <span className="text-2xl">🏢</span>
                        </div>
                        <h3 className="text-lg font-bold mb-1">
                          {exp.company}
                        </h3>
                        <div
                          className={`flex items-center justify-center text-sm mb-2 ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {exp.location}
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/50 text-blue-300 border border-blue-800/50">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            {exp.title}
                          </h3>
                        </div>
                        <div
                          className={`flex items-center px-4 py-2 rounded-lg ${
                            isDarkMode ? "bg-gray-800/50" : "bg-gray-200"
                          }`}
                        >
                          <svg
                            className={`w-4 h-4 mr-2 ${
                              isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m4 1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h16a2 2 0 012 2z"
                            />
                          </svg>
                          <span
                            className={`text-sm ${
                              isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className={`leading-relaxed mb-6 ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map(
                            (responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start">
                                <svg
                                  className="w-4 h-4 mr-3 mt-1 text-blue-400 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span
                                  className={`text-sm ${
                                    isDarkMode
                                      ? "text-gray-300"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {responsibility}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 rounded-full text-sm border ${
                                isDarkMode
                                  ? "bg-gray-800/70 text-gray-300 border-gray-700/50"
                                  : "bg-white text-gray-700 border-gray-300"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Gained Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Skills Gained Through Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className={`rounded-xl p-6 text-center border ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Complex debugging and solution development
              </p>
            </div>

            <div
              className={`rounded-xl p-6 text-center border ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Working effectively in cross-functional teams
              </p>
            </div>

            <div
              className={`rounded-xl p-6 text-center border ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Rapid Learning</h3>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Quick adaptation to new technologies and frameworks
              </p>
            </div>

            <div
              className={`rounded-xl p-6 text-center border ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Time Management</h3>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Delivering projects on time with quality standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
