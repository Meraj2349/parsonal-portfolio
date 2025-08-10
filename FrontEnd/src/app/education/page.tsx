"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../../contexts/ThemeContext";

export default function Education() {
  const { isDarkMode } = useTheme();

  const education = [
    {
      degree: "B.Sc. in Software Engineering",
      institution: "Shahjalal University of Science & Technology (SUST)",
      location: "Sylhet, Bangladesh",
      period: "2022 - 2026",
      cgpa: "In Progress",
      description:
        "Currently pursuing Bachelor of Science in Software Engineering at SUST, one of Bangladesh's premier technology universities. The curriculum covers comprehensive software development methodologies, algorithms, data structures, web technologies, and software project management. Active participation in programming competitions and development projects.",
      subjects: [
        "Software Engineering",
        "DSA",
        "OOP",
        "Web Development",
        "Database Systems",
        "AI/ML",
        "Software Architecture",
      ],
      resultLink: "#",
      logo: "/images/school/sust1.jpg",
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
            <span className="text-3xl mr-4">🎓</span>
            <h1
              className={`text-4xl md:text-5xl font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Education
            </h1>
          </div>
          <p
            className={`text-lg max-w-3xl ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            My academic journey and the educational foundation that has shaped
            my career in technology
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden border ${
                isDarkMode
                  ? "bg-gray-900/50 border-gray-800/50"
                  : "bg-white border-gray-200 shadow-lg"
              }`}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Institution Image/Logo */}
                <div
                  className={`lg:w-96 h-80 lg:h-auto bg-gradient-to-br relative overflow-hidden ${
                    isDarkMode
                      ? "from-blue-900/30 via-purple-900/30 to-gray-900"
                      : "from-blue-100/30 via-purple-100/30 to-gray-100"
                  } flex items-center justify-center`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      isDarkMode
                        ? "from-blue-500/10 to-purple-500/10"
                        : "from-blue-500/5 to-purple-500/5"
                    }`}
                  ></div>
                  <div className="absolute inset-0">
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      fill
                      className={`object-cover ${
                        isDarkMode ? "opacity-40" : "opacity-30"
                      }`}
                      sizes="(max-width: 1024px) 100vw, 384px"
                    />
                  </div>
                  <div className="text-center relative z-10">
                    <div
                      className={`w-24 h-24 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border ${
                        isDarkMode
                          ? "bg-gray-800/80 border-gray-700/50"
                          : "bg-white/80 border-gray-300/50"
                      }`}
                    >
                      <span className="text-3xl">🏛️</span>
                    </div>
                    <h3
                      className={`text-xl font-bold mb-2 drop-shadow-lg ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {edu.institution.split(" ").slice(0, 3).join(" ")}
                    </h3>
                    <h4
                      className={`text-lg mb-1 drop-shadow-lg ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {edu.institution.split(" ").slice(3).join(" ")}
                    </h4>
                    <div
                      className={`flex items-center justify-center text-sm mb-2 drop-shadow-lg ${
                        isDarkMode ? "text-gray-200" : "text-gray-700"
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
                      {edu.location}
                    </div>
                    <div
                      className={`flex items-center justify-center text-sm drop-shadow-lg ${
                        isDarkMode ? "text-gray-200" : "text-gray-700"
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      CGPA: {edu.cgpa}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <svg
                          className={`w-5 h-5 mr-2 ${
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
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <h3
                          className={`text-2xl font-bold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {edu.degree}
                        </h3>
                      </div>
                    </div>
                    <div
                      className={`flex items-center px-4 py-2 rounded-lg ${
                        isDarkMode ? "bg-gray-800/50" : "bg-gray-100"
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
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`leading-relaxed mb-6 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {edu.description}
                  </p>

                  {/* Subjects */}
                  <div className="mb-6">
                    <h4
                      className={`text-lg font-semibold mb-3 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Key Subjects:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, subjectIndex) => (
                        <span
                          key={subjectIndex}
                          className={`px-3 py-1 rounded-full text-sm border ${
                            isDarkMode
                              ? "bg-gray-800/70 text-gray-300 border-gray-700/50"
                              : "bg-blue-50 text-blue-700 border-blue-200"
                          }`}
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Result Button */}
                  <Link
                    href={edu.resultLink}
                    className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors duration-200 text-sm ${
                      isDarkMode
                        ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
                    View Result
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-20">
          <h2
            className={`text-3xl font-bold mb-8 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Academic Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className={`rounded-xl p-6 text-center border ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-white border-gray-200 shadow-lg"
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Dean&apos;s List
              </h3>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Consistent academic excellence throughout the program
              </p>
            </div>

            <div
              className={`rounded-xl p-6 text-center border ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-white border-gray-200 shadow-lg"
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Research Projects
              </h3>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Multiple projects in AI, ML, and software development
              </p>
            </div>

            <div
              className={`rounded-xl p-6 text-center border ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-white border-gray-200 shadow-lg"
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Leadership
              </h3>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Active participation in tech clubs and student organizations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
