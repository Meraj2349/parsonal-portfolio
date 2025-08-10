"use client";

import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute inset-0 ${
              isDarkMode
                ? "bg-gradient-to-br from-gray-900 via-black to-gray-900"
                : "bg-gradient-to-br from-gray-100 via-white to-gray-100"
            }`}
          ></div>
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0 bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${
                  isDarkMode ? "ffffff" : "000000"
                }' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r ${
              isDarkMode ? "from-white to-gray-400" : "from-black to-gray-600"
            } bg-clip-text text-transparent px-4`}
          >
            Md. Meraj Mridha
          </h1>
          <h2
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 px-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Software Engineer & Full Stack Developer
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed px-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Software Engineering student at SUST specializing in Full Stack
            Development with expertise in JavaScript, TypeScript, Next.js, and
            modern web technologies.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/CV/Md Meraj Mridha-Resume.pdf"
              download="Md_Meraj_Mridha_Resume.pdf"
              className={`inline-flex items-center px-8 py-3 rounded-full font-medium transition-colors duration-200 ${
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
            <Link
              href="/about"
              className={`inline-flex items-center px-8 py-3 border rounded-full font-medium transition-colors duration-200 ${
                isDarkMode
                  ? "border-gray-600 text-white hover:bg-gray-800"
                  : "border-gray-400 text-black hover:bg-gray-100"
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              About Me
            </Link>
          </div>

          {/* Contact Email */}
          <div className="flex items-center justify-center mb-16">
            <div
              className={`flex items-center ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full mr-3 ${
                  isDarkMode ? "bg-gray-400" : "bg-gray-600"
                }`}
              ></div>
              <span>mdmerajmridha34@gmail.com</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-md sm:max-w-2xl mx-auto px-4">
            <div
              className={`text-center rounded-lg p-4 sm:p-6 border ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-gray-100/30 border-gray-200/30"
              }`}
            >
              <div className="mb-2">
                <svg
                  className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div
                className={`text-xl sm:text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                400+
              </div>
              <div
                className={`text-xs sm:text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Problems Solved
              </div>
            </div>
            <div
              className={`text-center rounded-lg p-4 sm:p-6 border ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-gray-100/30 border-gray-200/30"
              }`}
            >
              <div className="mb-2">
                <svg
                  className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div
                className={`text-xl sm:text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                1500+
              </div>
              <div
                className={`text-xs sm:text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                LinkedIn Followers
              </div>
            </div>
            <div
              className={`text-center rounded-lg p-4 sm:p-6 border sm:col-span-1 col-span-1 ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-gray-100/30 border-gray-200/30"
              }`}
            >
              <div className="mb-2">
                <svg
                  className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <div
                className={`text-xl sm:text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                24×7
              </div>
              <div
                className={`text-xs sm:text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                WhatsApp Me
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
