const About = () => {
  return (
    <section id="about" className="w-full md:h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-4">
            <div className="uppercase text-xl tracking-widest text-[#5651e5] font-semibold">
              About
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Who I Am
            </h2>
            <p className="text-gray-600 leading-loose text-base sm:text-lg">
              Driven and detail-oriented front-end developer with expertise in
              React.js and Next.js, seeking to leverage my skills in building
              intuitive, high-performance web applications. Passionate about
              delivering user-centric solutions and collaborating on innovative
              projects that drive business growth and improve user experiences.
            </p>
            <a
              href="/src/assets/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-md bg-[#5651e5] px-6 py-3 text-white font-medium shadow-md transition-all duration-300 hover:bg-[#4742c9] hover:scale-105 w-fit"
            >
              Download CV
            </a>
          </div>

          <div className="w-full p-3 h-auto shadow-md rounded-lg flex items-center justify-center  bg-white">
            <img
              src="https://ahmedwagih.vercel.app/assets/about.jpeg"
              className="rounded-xl w-full max-w-md object-cover"
              alt="About"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
