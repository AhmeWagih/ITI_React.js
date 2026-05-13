import { FaGraduationCap, FaUniversity, FaLaptopCode } from "react-icons/fa";

const educationItems = [
  {
    title: "Faculty of Computers and Information",
    institution: "Zagazig University",
    year: "2025",
    description:
      "Computer Science major focused on building a strong foundation in software engineering, programming, and problem solving.",
    icon: <FaUniversity className="text-2xl" />,
  },
  {
    title: "ITI Student",
    institution: "Open Source Application Development Track",
    year: "Current",
    description:
      "Focused training in open source software development, collaboration, and community engagement.",
    icon: <FaLaptopCode className="text-2xl" />,
  },
];

const Education = () => {
  return (
    <section id="education" className="w-full flex items-center py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 mb-12 max-w-2xl">
          <p className="text-xl tracking-[0.35em] uppercase text-[#5651e5] font-semibold">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Academic Background
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-loose">
            My education combines a computer science foundation with focused
            practical training through ITI&apos;s open source application development track.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {educationItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-gray-200 bg-linear-to-br from-white to-slate-50 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5651e5]/10 text-[#5651e5] transition-colors duration-300 group-hover:bg-[#5651e5] group-hover:text-white">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-[#5651e5]/10 px-3 py-1 text-sm font-semibold text-[#5651e5]">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-gray-700 font-medium mb-3 flex items-center gap-2">
                    <FaGraduationCap className="text-[#5651e5]" />
                    {item.institution}
                  </p>

                  <p className="text-gray-600 leading-loose">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
