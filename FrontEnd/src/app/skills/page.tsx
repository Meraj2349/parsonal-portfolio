"use client";

import { useTheme } from "../../contexts/ThemeContext";

function SkillsPage() {
  const { isDarkMode, isHydrated } = useTheme();

  // Show loading state until hydrated to prevent hydration mismatch
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Skills & Technologies
          </h1>
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "🔧",
      skills: [
        { name: "JavaScript", icon: "📝" },
        { name: "TypeScript", icon: "📘" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "C++", icon: "⚡" },
        { name: "C#", icon: "🟪" },
        { name: "Kotlin", icon: "🟣" },
        { name: "C", icon: "🔤" },
        { name: "SQL", icon: "🗃️" },
      ],
    },
    {
      title: "Front-End Development",
      icon: "🎨",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "HTML5", icon: "📄" },
        { name: "CSS3", icon: "🎨" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Redux Toolkit", icon: "🔁" },
        { name: "TanStack Query", icon: "📡" },
        { name: "Refine + Ant Design", icon: "🧱" },
        { name: "Bootstrap", icon: "🅱️" },
      ],
    },
    {
      title: "Back-End Development",
      icon: "⚙️",
      skills: [
        { name: "ASP.NET Core (.NET)", icon: "🟦" },
        { name: "Node.js", icon: "🌐" },
        { name: "Express.js", icon: "🚀" },
        { name: "Spring Boot", icon: "🌱" },
        { name: "SignalR", icon: "📶" },
        { name: "Socket.io", icon: "🔌" },
        { name: "REST APIs", icon: "🔗" },
      ],
    },
    {
      title: "Mobile Development",
      icon: "📱",
      skills: [
        { name: "Kotlin + Jetpack Compose", icon: "🤖" },
        { name: "Android (Java)", icon: "☕" },
        { name: "Flutter", icon: "🦋" },
      ],
    },
    {
      title: "Databases",
      icon: "💾",
      skills: [
        { name: "PostgreSQL + PostGIS", icon: "🐘" },
        { name: "Redis", icon: "🟥" },
        { name: "Prisma / EF Core", icon: "🔷" },
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐬" },
        { name: "Firebase", icon: "🔥" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: "🔄",
      skills: [
        { name: "Git", icon: "📊" },
        { name: "GitHub", icon: "🐱" },
        { name: "Docker", icon: "🐳" },
        { name: "GitHub Actions", icon: "⚙️" },
        { name: "AWS", icon: "☁️" },
        { name: "Selenium", icon: "🔧" },
      ],
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      skills: [
        { name: "VS Code", icon: "💻" },
        { name: "Android Studio", icon: "📱" },
        { name: "IntelliJ IDEA", icon: "🧠" },
        { name: "Figma", icon: "🎨" },
      ],
    },
    {
      title: "Core Concepts",
      icon: "💭",
      skills: [
        { name: "OOP", icon: "🏗️" },
        { name: "Design Patterns", icon: "🎨" },
        { name: "Data Structures", icon: "📊" },
        { name: "Algorithms", icon: "🧩" },
      ],
    },
    {
      title: "Competitive Programming",
      icon: "🏆",
      skills: [
        { name: "LeetCode", icon: "💻" },
        { name: "Codeforces", icon: "🔥" },
        { name: "CodeChef", icon: "👨‍🍳" },
        { name: "VJudge", icon: "⚖️" },
      ],
    },
    {
      title: "Operating Systems",
      icon: "💻",
      skills: [
        { name: "Windows", icon: "🪟" },
        { name: "Linux (Ubuntu)", icon: "🐧" },
        { name: "Parrot OS", icon: "🦜" },
      ],
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: [
        { name: "Teamwork", icon: "👥" },
        { name: "Problem Solving", icon: "🔍" },
        { name: "Communication", icon: "💬" },
        { name: "Leadership", icon: "👑" },
      ],
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
        <div className="mb-16 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 sm:px-0">
            Technical Skills
          </h1>
          <p
            className={`text-base sm:text-lg max-w-3xl px-4 sm:px-0 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A comprehensive overview of my technical expertise and tools I work
            with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`rounded-2xl p-4 sm:p-6 border transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/50 hover:bg-gray-900/50"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">
                  {category.icon}
                </span>
                <h3 className="text-base sm:text-lg font-semibold leading-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 ${
                      isDarkMode
                        ? "bg-gray-800/40 hover:bg-gray-800/60"
                        : "bg-white hover:bg-gray-200"
                    }`}
                  >
                    <span className="text-xs sm:text-sm">{skill.icon}</span>
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CV Download Section */}
        <div className="mt-16 sm:mt-20 text-center px-4 sm:px-0">
          <div
            className={`rounded-2xl p-8 border ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-gray-800/50"
                : "bg-gradient-to-r from-blue-50 to-purple-50 border-gray-200"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Download My Resume
            </h2>
            <p
              className={`text-base sm:text-lg mb-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Get a detailed overview of my skills, experience, and projects
            </p>
            <a
              href="/CV/Md Meraj Mridha-Resume.pdf"
              download="Md_Meraj_Mridha_Resume.pdf"
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                isDarkMode
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
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
          </div>
        </div>

        {/* Learning Stats */}
        <div className="mt-16 sm:mt-20 text-center px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Achievement Statistics
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div
              className={`text-center rounded-lg p-4 border ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                25+
              </div>
              <div
                className={`text-xs sm:text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Technologies
              </div>
            </div>
            <div
              className={`text-center rounded-lg p-4 border ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
                3+
              </div>
              <div
                className={`text-xs sm:text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Years Experience
              </div>
            </div>
            <div
              className={`text-center rounded-lg p-4 border ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
                15+
              </div>
              <div
                className={`text-xs sm:text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Projects Built
              </div>
            </div>
            <div
              className={`text-center rounded-lg p-4 border ${
                isDarkMode
                  ? "bg-gray-900/30 border-gray-800/30"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
