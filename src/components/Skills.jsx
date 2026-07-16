import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import {
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiNodedotjs,
  SiMysql,
  SiAndroid,
  SiAndroidstudio,
  SiPython,
  SiPandas,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { FaDatabase, FaCode, FaMobileAlt, FaToolbox } from "react-icons/fa"; // fallback icons

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState("all");

  // Daftar skill dengan ikon dan kategori
  const skillsData = [
    {
      name: "React",
      icon: <SiReact className="text-blue-500 text-3xl" />,
      category: "frontend",
    },
    {
      name: "HTML",
      icon: <SiHtml5 className="text-orange-600 text-3xl" />,
      category: "frontend",
    },

    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-500 text-3xl" />,
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 text-3xl" />,
      category: "frontend",
    },
    {
      name: "PHP",
      icon: <SiPhp className="text-purple-600 text-3xl" />,
      category: "backend",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-600 text-3xl" />,
      category: "backend",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-600 text-3xl" />,
      category: "backend",
    },
    {
      name: "Android",
      icon: <SiAndroid className="text-green-500 text-3xl" />,
      category: "mobile",
    },
    {
      name: "Android Studio",
      icon: <SiAndroidstudio className="text-green-600 text-3xl" />,
      category: "mobile",
    },
    {
      name: "Python",
      icon: <SiPython className="text-blue-500 text-3xl" />,
      category: "data",
    },
    {
      name: "Pandas",
      icon: <SiPandas className="text-blue-400 text-3xl" />,
      category: "data",
    },
    {
      name: "Scikit-learn",
      icon: <SiScikitlearn className="text-orange-500 text-3xl" />,
      category: "data",
    },
    {
      name: "Git",
      icon: <SiGit className="text-red-500 text-3xl" />,
      category: "tools",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="text-gray-700 text-3xl" />,
      category: "tools",
    },

    {
      name: "Figma",
      icon: <SiFigma className="text-purple-500 text-3xl" />,
      category: "tools",
    },
  ];

  // Kategori unik
  const categories = ["all", ...new Set(skillsData.map((s) => s.category))];

  const filteredSkills =
    filter === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === filter);

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 max-w-[1200px] mx-auto px-4 md:px-8 scroll-fade-up ${isVisible ? "visible" : ""}`}
    >
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-bold leading-tight text-[var(--text-primary)] mb-4">
          Skills &amp;{" "}
          <span className="bg-gradient-to-r from-[#4f46e5] to-[#712ae2] text-transparent bg-clip-text">
            Technologies
          </span>
        </h1>
        <p className="font-['Inter'] text-lg text-[var(--text-secondary)] max-w-2xl">
          Teknologi yang saya kuasai, lengkap dengan logo masing-masing.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`font-['Inter'] text-sm font-semibold px-5 py-2 rounded-full transition-colors ${
              filter === cat
                ? "bg-[#4f46e5] text-white"
                : "bg-[#eaedff] hover:bg-[#dae2fd] text-[#464555] border border-[#c7c4d8]"
            }`}
          >
            {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-[#c7c4d8] p-4 flex flex-col items-center justify-center text-center hover:shadow-[0px_10px_30px_rgba(79,70,229,0.12)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mb-2">{skill.icon}</div>
            <span className="font-['Inter'] text-sm font-semibold text-[#131b2e]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
