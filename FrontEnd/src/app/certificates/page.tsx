"use client";

import { useTheme } from "../../contexts/ThemeContext";

export default function Certificates() {
  const { isDarkMode } = useTheme();

  const certificates = [
    {
      title: "Python Programming and Basic Data Science",
      issuer:
        "Institute of Information and Communication Technology (IICT), SUST & EDGE Project, Bangladesh Computer Council, ICT Division",
      date: "May 2025",
      description:
        "Successfully completed a training on 'Python Programming and Basic Data Science' (80 hours) conducted by IICT, SUST from Dec 2024 to Feb 2025, under EDGE Project of Bangladesh Computer Council, ICT Division.",
      credentialId: "EDGE-DSTS-126-8766-00014",
      skills: ["Python", "Data Science", "Digital Skills"],
      image: "/images/certificate/EDGE.jpg",
    },
    {
      title:
        "8th International Conference on Engineering Research, Innovation & Education (ICERIE) 2025",
      issuer: "Shahjalal University of Science and Technology, Sylhet",
      date: "April 2025",
      description:
        "Certificate of Participation: Contributed as a dedicated volunteer in the 8th ICERIE 2025 held at SUST from 24 to 26 April 2025. Commitment and effort in supporting the success of this event have been highly valued.",
      credentialId: "ICERIE-2025",
      skills: ["Event Volunteering", "Conference Support"],
      image: "/images/certificate/INternationalConference.jpeg",
    },
    {
      title: "NACTAR Robotics Olympiad 2022",
      issuer: "NACTAR & Robo Tech Valley",
      date: "2022",
      description:
        "Certificate of Participation: Participated in the Segment 'Line follower robot (LFR)' as part of Team STUBBORN in NACTAR Robotics Olympiad 2022.",
      credentialId: "NACTAR-2022",
      skills: ["Robotics", "Line Follower Robot", "Teamwork"],
      image: "/images/certificate/NactarRoboticsOlympiad.jpeg",
    },
  ];

  const achievements = [
    {
      title: "2nd Runner-up (Green Geek Squad)",
      event: "UIHP Innovation Hub Program 2024 – FarmAI",
      description: "Awarded 40,000 BDT at SUST TC2.",
      date: "2024",
    },
    {
      title: "Selected Participant",
      event: "NASA Space Apps Challenge Bangladesh 2024",
      description: "Selected to take part in the NASA Space Apps Challenge.",
      date: "2024",
    },
    {
      title: "Qualified Participant",
      event: "Therap Javafest 2025",
      description: "Qualified for Therap Javafest 2025.",
      date: "2025",
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
              {/* Certificate Image */}
              {cert.image && (
                <div className="mb-6 w-full flex justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title + " certificate"}
                    className="rounded-lg max-h-[350px] w-auto object-contain border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              )}
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

              {/* Download Button */}
              <a
                href={cert.image}
                download
                className={`w-full block text-center py-2 border rounded-lg transition-colors text-sm font-medium ${
                  isDarkMode
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
                title="Download Certificate"
              >
                Download Certificate
              </a>
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
        <div className="mt-20 grid grid-cols-2 gap-8 max-w-md mx-auto">
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
