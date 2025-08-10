"use client";

import { useTheme } from "../../contexts/ThemeContext";

export default function Certificates() {
  const { isDarkMode } = useTheme();

  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2024",
      description:
        "Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, and MongoDB",
      credentialId: "FCC-FSWD-2024",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      description:
        "Advanced React concepts including hooks, context, performance optimization, and testing",
      credentialId: "META-REACT-2024",
      skills: [
        "React",
        "Redux",
        "React Router",
        "Jest",
        "React Testing Library",
      ],
    },
    {
      title: "Node.js Developer Path",
      issuer: "MongoDB University",
      date: "2023",
      description:
        "Backend development with Node.js, Express.js, and MongoDB database integration",
      credentialId: "MDB-NODE-2023",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs"],
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      description:
        "Problem-solving with JavaScript including algorithms, data structures, and programming fundamentals",
      credentialId: "FCC-JS-2023",
      skills: [
        "JavaScript",
        "Algorithms",
        "Data Structures",
        "Problem Solving",
      ],
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      description:
        "Foundational understanding of AWS cloud services, architecture, and best practices",
      credentialId: "AWS-CP-2023",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "CloudFormation"],
    },
    {
      title: "Git and GitHub Essentials",
      issuer: "GitHub",
      date: "2023",
      description:
        "Version control, collaboration workflows, and Git best practices for development teams",
      credentialId: "GH-GIT-2023",
      skills: ["Git", "GitHub", "Version Control", "Collaboration", "CI/CD"],
    },
  ];

  const achievements = [
    {
      title: "Hackathon Winner",
      event: "University Tech Fest 2024",
      description:
        "First place in web development category for building an innovative e-learning platform",
      date: "2024",
    },
    {
      title: "Open Source Contributor",
      event: "Hacktoberfest 2023",
      description:
        "Successfully contributed to 8+ open source projects during Hacktoberfest",
      date: "2023",
    },
    {
      title: "Coding Competition",
      event: "CodeChef Monthly Challenge",
      description:
        "Ranked in top 10% participants in multiple monthly coding challenges",
      date: "2023",
    },
  ];

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Certificates
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Professional certifications and achievements that validate my
            technical skills
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-colors border ${
                isDarkMode
                  ? "bg-gray-900/50 hover:bg-gray-800/50 border-gray-800/30"
                  : "bg-white hover:bg-gray-50 border-gray-200 shadow-lg"
              }`}
            >
              {/* Certificate Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-grow">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {cert.title}
                  </h3>
                  <p
                    className={`font-medium ${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {cert.issuer}
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-3 py-1 rounded-lg text-sm ${
                      isDarkMode
                        ? "bg-gray-800 text-gray-300"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className={`mb-4 leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {cert.description}
              </p>

              {/* Credential ID */}
              <div className="mb-4">
                <span
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Credential ID:
                </span>
                <span
                  className={`font-mono text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {cert.credentialId}
                </span>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4
                  className={`text-sm font-semibold mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Skills Covered:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 py-1 rounded text-xs ${
                        isDarkMode
                          ? "bg-gray-800 text-gray-300"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Button */}
              <button
                className={`w-full py-2 border rounded-lg transition-colors text-sm font-medium ${
                  isDarkMode
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Verify Certificate
              </button>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Achievements & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 text-center border ${
                  isDarkMode
                    ? "bg-gray-900/50 border-gray-800/30"
                    : "bg-white border-gray-200 shadow-lg"
                }`}
              >
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-black"
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
                  {achievement.title}
                </h3>
                <p
                  className={`font-medium mb-3 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {achievement.event}
                </p>
                <p
                  className={`text-sm mb-3 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {achievement.description}
                </p>
                <span
                  className={`inline-block px-3 py-1 rounded-lg text-xs ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {achievement.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div
              className={`text-3xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {certificates.length}
            </div>
            <div
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Certifications
            </div>
          </div>
          <div className="text-center">
            <div
              className={`text-3xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {achievements.length}
            </div>
            <div
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Achievements
            </div>
          </div>
          <div className="text-center">
            <div
              className={`text-3xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              15+
            </div>
            <div
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Skills Verified
            </div>
          </div>
          <div className="text-center">
            <div
              className={`text-3xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              100%
            </div>
            <div
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Completion Rate
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2
            className={`text-3xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Continuous Learning
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I believe in continuous learning and professional development. These
            certifications represent my commitment to staying current with
            technology trends and best practices in software development.
          </p>
        </div>
      </div>
    </div>
  );
}
