"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../../contexts/ThemeContext";

export default function About() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 px-4">
            About Me
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div
                className={`aspect-square w-full max-w-sm sm:max-w-md mx-auto overflow-hidden rounded-2xl ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Md. Meraj Mridha - Profile Picture"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="order-1 lg:order-2 px-4 lg:px-0">
            <div className="space-y-6">
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Hi! I&apos;m Md. Meraj Mridha, a passionate Software Engineering
                student at Shahjalal University of Science & Technology (SUST).
                With over 3 years of programming experience, I specialize in
                full-stack development with expertise in JavaScript, TypeScript,
                React.js, Next.js, and modern web technologies.
              </p>

              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Currently pursuing my B.Sc. in Software Engineering (2022-2026)
                at SUST, I&apos;ve developed multiple innovative projects
                including SmartSchool management system, Library Management App
                using Android & Firebase, and contributed to cutting-edge
                projects like FarmAI and ICERIE conference website.
              </p>

              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                My technical expertise spans across frontend technologies
                (React, Next.js, Vue.js), backend development (Node.js,
                Express.js, Django), databases (MySQL, PostgreSQL, MongoDB), and
                mobile development (Android with Java). I&apos;m also
                experienced in competitive programming with 500+ problems solved
                across various platforms including LeetCode, Codeforces, and
                CodeChef.
              </p>

              {/* Quick Facts */}
              <div className="mt-8 sm:mt-12">
                <h3
                  className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Quick Facts
                </h3>
                <ul className="space-y-3">
                  <li
                    className={`flex items-center text-sm sm:text-base ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                    Based in Sylhet, Bangladesh
                  </li>
                  <li
                    className={`flex items-center text-sm sm:text-base ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                    Student ID: 200831034 at SUST
                  </li>

                  <li
                    className={`flex items-center text-sm sm:text-base ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                    Full-Stack & Mobile Developer
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full font-medium transition-colors duration-200 text-sm sm:text-base ${
                    isDarkMode
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Get In Touch
                </Link>
                <Link
                  href="/skills"
                  className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 border rounded-full font-medium transition-colors duration-200 text-sm sm:text-base ${
                    isDarkMode
                      ? "border-gray-600 text-white hover:bg-gray-800"
                      : "border-gray-300 text-black hover:bg-gray-100"
                  }`}
                >
                  My Skills
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-0">
          {/* Experience */}
          <div
            className={`text-center p-6 sm:p-8 rounded-2xl ${
              isDarkMode ? "bg-gray-900/50" : "bg-gray-100/50"
            }`}
          >
            <div className="mb-4">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                />
              </svg>
            </div>
            <h3
              className={`text-lg sm:text-xl font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Experience
            </h3>
            <p
              className={`text-sm sm:text-base ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              3+ years of software development with 15+ successful projects and
              500+ problems solved
            </p>
          </div>

          {/* Education */}
          <div
            className={`text-center p-6 sm:p-8 rounded-2xl ${
              isDarkMode ? "bg-gray-900/50" : "bg-gray-100/50"
            }`}
          >
            <div className="mb-4">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-green-500"
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
              className={`text-lg sm:text-xl font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Education
            </h3>
            <p
              className={`text-sm sm:text-base ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              B.Sc. in Software Engineering at SUST (2022-2026) with focus on
              modern technologies
            </p>
          </div>

          {/* Skills */}
          <div
            className={`text-center p-6 sm:p-8 rounded-2xl sm:col-span-2 lg:col-span-1 ${
              isDarkMode ? "bg-gray-900/50" : "bg-gray-100/50"
            }`}
          >
            <div className="mb-4">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-purple-500"
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
            <h3
              className={`text-lg sm:text-xl font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Skills
            </h3>
            <p
              className={`text-sm sm:text-base ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Expert in React, Next.js, Node.js, Android development, and
              competitive programming
            </p>
          </div>
        </div>

        {/* CV Download Section */}
        <div className="mt-16 text-center">
          <div
            className={`max-w-md mx-auto p-6 rounded-2xl border ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-gray-800"
                : "bg-gradient-to-r from-blue-50 to-purple-50 border-gray-200"
            }`}
          >
            <div className="mb-4">
              <svg
                className={`w-12 h-12 mx-auto ${
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
            <h3
              className={`text-xl font-semibold mb-3 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Download My Resume
            </h3>
            <p
              className={`text-sm mb-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Get a detailed overview of my experience, skills, and achievements
            </p>
            <a
              href="/CV/Md Meraj Mridha-Resume.pdf"
              download="Md_Meraj_Mridha_Resume.pdf"
              className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                isDarkMode
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
