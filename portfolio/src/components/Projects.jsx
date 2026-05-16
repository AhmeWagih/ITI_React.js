import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    project_name: "Earth Simulator",
    description:
      "Created an interactive platform using NASA data to explore Earth's systems, featuring quizzes, AI-generated videos, and a personalized footprint calculator. The platform provides real-time feedback on sustainable choices, helping users understand and reduce their environmental impact.",
    src: "/projects/earth.png",
    url: "https://nasa-space-app-mauve.vercel.app",
    github: "https://github.com/AhmeWagih/earth_simulator",
    tags: [
      "Next",
      "React",
      "Three.js",
      "GLSX",
      "LIL-GUI",
      "Tailwind CSS",
      "Framer Motion",
    ],
    alt: "Earth Simulator",
  },
  {
    project_name: "YoutubeClone",
    description:
      "Developed a YouTube clone application using React and Tailwind CSS, integrating it with YouTube's API to fetch and display videos, enabling users to search and watch videos seamlessly.",
    src: "/projects/youtubeclone.png",
    url: "https://youtube-clone-eight-nu.vercel.app/",
    github: "https://github.com/AhmeWagih/youtube-clone",
    tags: ["React", "Tailwind CSS", "Rapid API"],
    alt: "Youtube Clone",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex items-center py-20 md:py-28 bg-slate-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 mb-12 max-w-2xl">
          <p className="text-xl tracking-[0.35em] uppercase text-[#5651e5] font-semibold">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Selected Work
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-loose">
            A few projects that show my focus on modern front-end experiences,
            interactive interfaces, and practical API-driven applications.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.project_name}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              <div className="grid">
                <div className="relative  bg-linear-to-br from-[#5651e5] via-[#7b79f0] to-[#101827] p-6 text-white flex flex-col justify-between overflow-hidden">
                  <div className="relative z-10">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
                      Featured
                    </span>
                    <h3 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight">
                      {project.project_name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col gap-5">
                  <p className="text-gray-600 leading-loose">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-[#5651e5]/10 px-3 py-1 text-xs font-semibold text-[#5651e5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#5651e5] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#4742c9] hover:scale-105"
                    >
                      Live Demo <FaExternalLinkAlt className="text-xs" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-[#5651e5]/30 hover:text-[#5651e5] hover:shadow-sm"
                    >
                      Source Code <FaGithub className="text-base" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
