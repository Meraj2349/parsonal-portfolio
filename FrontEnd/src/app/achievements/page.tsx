"use client";

import Image from "next/image";
import React from "react";

interface Achievement {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    title: "NASA Space Apps Challenge Bangladesh 2024",
    description:
      "Selected participant in the NASA Space Apps Challenge 2024, Bangladesh. Collaborated with a multidisciplinary team to solve real-world problems using space and earth science data.",
    image: "/images/achievement/nasa_space_apps_2024.jpeg",
  },
  {
    title: "UIHP Innovation Hub Program 2024 – FarmAI",
    description:
      "2nd Runner-up with team Green Geek Squad for the FarmAI project. Awarded 40,000 BDT at SUST TC2 in the University Innovation Hub Program.",
    image: "/images/achievement/uihp_innovation_2024.jpeg",
    link: "https://www.linkedin.com/posts/md-meraj-mridha_excitingnews-greengeeksquad-innovation-activity-7255948292147027968-PjwB",
  },
  {
    title: "BdSL Bangla Sign Language",
    description:
      "Implemented feature extraction and trained SVM/LSTM models on research dataset.",
    link: "https://github.com/Meraj2349/BdSL_Bangla-Sign_Language",
  },
  {
    title: "Astrobee Kibo Robot Programming Challenge",
    description: "Contributed to autonomous robot programming using Java.",
    link: "#",
  },
  {
    title: "Therap Javafest 2025",
    description: "Qualified participant.",
    link: "#",
  },
  {
    title: "EDGE Data Science",
    description: "Certified trainee.",
    link: "#",
  },
];

const Achievements: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Achievements & Research
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
          Highlights from competitions, research, and certifications.
        </p>
      </div>
      <ul className="space-y-6">
        {achievements.map((item, idx) => (
          <li
            key={idx}
            className="bg-white dark:bg-gray-900/40 rounded-xl p-6 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              {item.image && (
                <div className="w-full max-w-sm mb-2 sm:mb-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={350}
                    height={220}
                    className="rounded-lg shadow-md object-cover"
                    style={{ maxHeight: 220, width: "100%", height: "auto" }}
                    priority={idx < 2}
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.link && item.link !== "#" ? (
                    <a
                      href={item.link}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
