import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-4xl text-[#e34f26]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-4xl text-[#1572b6]" /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-4xl text-[#f7df1e]" />,
  },
  { name: "React", icon: <FaReact className="text-4xl text-[#61dafb]" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-4xl text-[#38bdf8]" />,
  },
  { name: "Vite", icon: <SiVite className="text-4xl text-[#646cff]" /> },
  { name: "Git", icon: <FaGitAlt className="text-4xl text-[#f05032]" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="uppercase text-xl tracking-widest text-[#5651e5] font-semibold">
              Skills
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Technologies I Use
            </h2>
            <p className="text-gray-600 leading-loose text-base sm:text-lg">
              I build responsive interfaces with modern front-end tools and keep
              my workflow focused on clean structure, reusable components, and
              performance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 transition-colors duration-300 group-hover:bg-gray-100">
                    {skill.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
