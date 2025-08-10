"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../../contexts/ThemeContext";

export default function Projects() {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "SmartSchool",
      description:
        "Comprehensive school management system built with React.js, Express.js, and MySQL. Features admin panel for managing student/teacher information, attendance tracking, results management, online admissions, and interactive learning platform.",
      technologies: [
        "React.js",
        "Express.js",
        "MySQL",
        "Node.js",
        "JavaScript",
        "CSS",
      ],
      github: "https://github.com/Meraj2349/SchoolProject",
      demo: "#",
      image: "/api/placeholder/600/300",
      featured: true,
    },
    {
      title: "Library Management App",
      description:
        "Full-featured Android library system using Java and Firebase. Includes CRUD operations for book inventory, secure user authentication, real-time data synchronization, advanced search, and Material Design interface.",
      technologies: [
        "Java",
        "Firebase",
        "Android",
        "Material Design",
        "XML",
        "Gradle",
      ],
      github: "https://github.com/Meraj2349/Library_Management_App",
      demo: "#",
      image: "/images/project/libraryImage.png",
      featured: true,
    },

    {
      title: "ICERIE Website",
      description:
        "Collaborative development of the ICERIE website using Next.js. Contributed to feature implementation including navbar, homepage, track page, performed bug fixes, and participated in code reviews.",
      technologies: ["Next.js", "React", "JavaScript", "CSS", "Git"],
      github: "https://github.com/Meraj2349/arces_2024",
      demo: "#",
      image: "/images/project/ICRIEimage.png",
      featured: true,
    },
    {
      title: "Video Conferencing App",
      description:
        "The Video Conferencing App enables users to create and join video meetings with chat, screen sharing, and recording features.",
      technologies: ["Tailwind CSS", "React.js", "Next.js", "Clerk", "Stream"],
      github: "https://github.com/Meraj2349",
      demo: "#",
      image: "/api/placeholder/600/300",
      featured: true,
    },
    {
      title: "SkillMate AI Platform",
      description:
        "AI-powered educational content platform that revolutionizes online learning by aggregating courses from multiple platforms, providing personalized learning paths, and comprehensive progress tracking.",
      technologies: ["Java Swing", "Firebase", "MongoDB", "AI/ML"],
      github: "https://github.com/Meraj2349/ai_powered_content_platform",
      demo: "#",
      image: "/api/placeholder/600/300",
      featured: false,
    },
    {
      title: "FarmAI",
      description:
        "AI-driven agricultural solution developed using Next.js. Contributed to implementing new features and fixing bugs. Engaged in collaborative coding with Git and GitHub for version control.",
      technologies: ["Next.js", "React", "TypeScript", "AI/ML"],
      github: "https://github.com/Meraj2349/FarmAI",
      demo: "#",
      image: "/api/placeholder/600/300",
      featured: false,
    },
  ];

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="mb-16 text-center sm:text-left">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 sm:px-0 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h1>
          <p
            className={`text-base sm:text-lg max-w-3xl px-4 sm:px-0 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A showcase of my recent work and projects that demonstrate my skills
            in full-stack development, real-time applications, and modern web
            technologies.
          </p>
        </div>

        {/* CV Download Section */}
        <div className="mb-16 px-4 sm:px-0">
          <div
            className={`rounded-2xl p-6 sm:p-8 border ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-gray-900/20 border-gray-800/50"
                : "bg-gradient-to-r from-blue-50 via-purple-50 to-gray-50 border-gray-200"
            }`}
          >
            <div className="text-center">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  isDarkMode ? "bg-blue-900/30" : "bg-blue-100"
                }`}
              >
                <svg
                  className={`w-8 h-8 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2
                className={`text-2xl sm:text-3xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                📄 Download My Resume
              </h2>
              <p
                className={`mb-6 max-w-2xl mx-auto ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Get a comprehensive overview of my skills, experience,
                education, and all the projects I&apos;ve worked on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/CV/Md Meraj Mridha-Resume.pdf"
                  download="Md_Meraj_Mridha_Resume.pdf"
                  className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                    isDarkMode
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </a>
                <a
                  href="/CV/Md Meraj Mridha-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 border rounded-full font-medium transition-all duration-200 ${
                    isDarkMode
                      ? "border-gray-600 text-white hover:bg-gray-800/50"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Preview CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16 px-4 sm:px-0">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border ${
                  isDarkMode
                    ? "bg-gray-900/50 border-gray-800/50"
                    : "bg-white border-gray-200 shadow-lg"
                }`}
              >
                {/* Project Image */}
                <div
                  className={`h-40 sm:h-48 flex items-center justify-center relative overflow-hidden ${
                    isDarkMode
                      ? "bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"
                      : "bg-gradient-to-br from-blue-100 via-purple-100 to-gray-100"
                  }`}
                >
                  <div
                    className={`absolute inset-0 ${
                      isDarkMode
                        ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                        : "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                    }`}
                  ></div>
                  {project.image.startsWith("/images/") ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <svg
                      className={`w-12 h-12 sm:w-16 sm:h-16 relative z-10 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h3
                    className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded text-xs border ${
                          isDarkMode
                            ? "bg-gray-800/70 text-gray-300 border-gray-700/50"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 border rounded-lg font-medium transition-colors duration-200 text-xs sm:text-sm ${
                        isDarkMode
                          ? "border-gray-600 text-white hover:bg-gray-800"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm ${
                        isDarkMode
                          ? "bg-white text-black hover:bg-gray-200"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h2
            className={`text-2xl md:text-3xl font-bold mb-8 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Other Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden transition-all duration-300 border ${
                    isDarkMode
                      ? "bg-gray-900/30 hover:bg-gray-900/50 border-gray-800/30"
                      : "bg-white hover:bg-gray-50 border-gray-200 shadow-md"
                  }`}
                >
                  {/* Project Image */}
                  <div
                    className={`h-32 flex items-center justify-center relative overflow-hidden ${
                      isDarkMode
                        ? "bg-gradient-to-br from-gray-800 to-gray-900"
                        : "bg-gradient-to-br from-gray-100 to-gray-200"
                    }`}
                  >
                    {project.image.startsWith("/images/") ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    ) : (
                      <svg
                        className={`w-12 h-12 ${
                          isDarkMode ? "text-gray-500" : "text-gray-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-5">
                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`mb-3 text-sm leading-relaxed ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-0.5 rounded text-xs ${
                              isDarkMode
                                ? "bg-gray-800/50 text-gray-400"
                                : "bg-blue-50 text-blue-600"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span
                          className={`px-2 py-0.5 text-xs ${
                            isDarkMode ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center px-3 py-1.5 border rounded font-medium transition-colors duration-200 text-xs ${
                          isDarkMode
                            ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                            : "border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </Link>
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center px-3 py-1.5 rounded font-medium transition-colors duration-200 text-xs ${
                          isDarkMode
                            ? "bg-gray-700 text-white hover:bg-gray-600"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <h2
            className={`text-3xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Want to see more?
          </h2>
          <p
            className={`text-lg mb-8 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Check out my GitHub for more projects and contributions to open
            source.
          </p>
          <Link
            href="https://github.com/Meraj2349"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-8 py-3 rounded-full font-medium transition-colors duration-200 ${
              isDarkMode
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Visit My GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
