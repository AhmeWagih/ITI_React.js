import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contactLinks = [
  { href: "#", label: "GitHub", icon: <FaGithub className="text-xl" /> },
  { href: "#", label: "LinkedIn", icon: <FaLinkedinIn className="text-xl" /> },
  {
    href: "mailto:ahmedwagih087@gmail.com",
    label: "Email",
    icon: <FaEnvelope className="text-xl" />,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center bg-linear-to-b from-white via-slate-50 to-white"
    >
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-56 w-56 rounded-full bg-[#5651e5]/10 blur-3xl" />

        <div className="flex flex-col gap-4 mb-12 max-w-2xl">
          <p className="text-xl tracking-[0.35em] uppercase text-[#5651e5] font-semibold">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-loose">
            If you want to collaborate, hire me, or just say hello, this is the
            easiest place to reach me.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="col-span-3 lg:col-span-2 w-full h-full rounded-3xl border border-gray-200 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="lg:p-4 h-full flex flex-col gap-6">
              <div>
                <h3 className="py-2 mt-2 text-[#5651e5] text-2xl font-semibold">
                  Ahmed Wagih
                </h3>
                <p className="text-gray-700 font-medium tracking-wide">
                  Full Stack Developer
                </p>
                <p className="py-4 leading-loose text-gray-600">
                  I&apos;m available for freelance or full-time positions.
                  Contact me and let&apos;s talk.
                </p>
              </div>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5651e5]/10 text-[#5651e5]">
                    <FaPhoneAlt />
                  </span>
                  <span>+20 1113078687</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5651e5]/10 text-[#5651e5]">
                    <FaEnvelope />
                  </span>
                  <span>ahmedwagih087@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5651e5]/10 text-[#5651e5]">
                    <FaMapMarkerAlt />
                  </span>
                  <span>Egypt</span>
                </div>
              </div>

              <div>
                <p className="uppercase pt-2 text-sm tracking-[0.3em] text-gray-700 font-semibold">
                  Connect With Me
                </p>
                <div className="flex flex-wrap gap-4 py-5">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel={
                        link.href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-800 border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5651e5]/30 hover:text-[#5651e5] hover:shadow-md"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto rounded-3xl border border-gray-200 bg-white/90 lg:p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="p-4 sm:p-6">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-xs tracking-[0.25em] py-2 text-gray-700 font-semibold">
                      Name
                    </label>
                    <input
                      className="w-full outline-none p-3 rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 placeholder:text-gray-400 focus:border-[#5651e5] focus:ring-2 focus:ring-[#5651e5]/10"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-xs tracking-[0.25em] py-2 text-gray-700 font-semibold">
                      Phone Number
                    </label>
                    <input
                      className="w-full outline-none p-3 rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 placeholder:text-gray-400 focus:border-[#5651e5] focus:ring-2 focus:ring-[#5651e5]/10"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-xs tracking-[0.25em] py-2 text-gray-700 font-semibold">
                    Email
                  </label>
                  <input
                    className="w-full outline-none p-3 rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 placeholder:text-gray-400 focus:border-[#5651e5] focus:ring-2 focus:ring-[#5651e5]/10"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-xs tracking-[0.25em] py-2 text-gray-700 font-semibold">
                    Subject
                  </label>
                  <input
                    className="w-full outline-none p-3 rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 placeholder:text-gray-400 focus:border-[#5651e5] focus:ring-2 focus:ring-[#5651e5]/10"
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-xs tracking-[0.25em] py-2 text-gray-700 font-semibold">
                    Message
                  </label>
                  <textarea
                    className="w-full outline-none p-3 rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 placeholder:text-gray-400 focus:border-[#5651e5] focus:ring-2 focus:ring-[#5651e5]/10"
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="10"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-4 text-gray-100 mt-4 rounded-xl bg-linear-to-r from-[#5651e5] to-[#3f3bb3] hover:from-[#4742c9] hover:to-[#353199] transition-all duration-300 font-semibold shadow-lg shadow-[#5651e5]/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
