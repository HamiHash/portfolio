import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import emailjs from "@emailjs/browser";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { IoMail, IoRocket } from "react-icons/io5";
import { ImEye } from "react-icons/im";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import deved from "./Img/dev-ed-wave.png";
import foodoo from "./Img/foodoo.webp";
import guess from "./Img/guess.png";
import mapty from "./Img/mapty.png";
import bankist from "./Img/bankist.png";
import pig from "./Img/pig.png";
import foodooLogo from "./Img/foodoo-logo.png";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qbm598f",
      "template_5y0fy3d",
      form.current,
      "wicKoJL-1B3hLCC07"
    );
    e.target.reset();
  };

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="transition-all duration-700 bg-light-pattern bg-cover bg-fixed px-10 md:px-20 lg:px-40 xl:px-60 dark:bg-dark-pattern ">
        <section id="top" className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-burtons">developed by</h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <MdLightMode
                    onClick={() => setDarkMode(!darkMode)}
                    className="text-white cursor-pointer text-3xl"
                  />
                ) : (
                  <MdDarkMode
                    onClick={() => setDarkMode(!darkMode)}
                    className="text-black cursor-pointer text-3xl"
                  />
                )}
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-cyan-800 to-sky-600  transition-all duration-1000 text-white px-4 py-2 rounded-md ml-8"
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className=" text-5xl py-2 text-[#003892] dark:text-teal-200 font-medium md:text-6xl ">
              Hamed Hashemi
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-50">
              Junior front-end developer
            </h3>
            <p className="text-md py-5 leading-8 dark:text-gray-100 text-gray-800 md:text-xl max-w-xl mx-auto">
              Motivated to grow and a fast learner. join me below and lets get
              cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-white ">
            <a href="https://github.com/HamiHash">
              <FaGithub className="hover:text-[#003892] dark:hover:text-[#643050] hover:-translate-y-2 transition-all duration-500" />
            </a>
            <a href="https://twitter.com/hami_hash">
              <FaTwitter className="hover:text-[#003892] dark:hover:text-[#643050] hover:-translate-y-2 transition-all duration-500" />
            </a>
            <a href="https://www.linkedin.com/in/hamed-hashemi-101259260/">
              <FaLinkedin className="hover:text-[#003892] dark:hover:text-[#643050] hover:-translate-y-2 transition-all duration-500" />
            </a>
          </div>
          <div className=" relative mx-auto  rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <img
              src={deved}
              fill
              className=" shadow-md shadow-slate-900 shadow-cyan-200"
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          <div>
            <h2 className="text-gray-800 dark:text-gray-50 text-3xl py-1 font-medium">
              About me
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 font-light dark:text-gray-200">
              Greetings, my name is Hamed I'm 22 from Tehran. a tech enthusiast.
              looking for an internship to start my journey as a front-end
              developer.
              <br />
              I'm naturally curious and perpetually working to improve my skills
              and expand my toolkit-knowledge about the field.
              <br />
            </p>
          </div>
        </section>

        <section className="my-20">
          <h2 className="text-gray-800 dark:text-gray-50 text-3xl py-2 font-medium">
            I have experience with
          </h2>
          <div className="flex py-10 mx-auto gap:5 md:gap-16 max-w-4xl">
            <div className=" flex-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            </div>
            <div className="flex-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            </div>
            <div className="flex-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            </div>
            <div className="flex-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-gray-800 dark:text-gray-50 text-3xl py-1 font-medium">
              Portfolio
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 font-light dark:text-gray-200">
              These are some of the projects that I've worked on
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10  ">
            <div className="flex flex-col md:flex-row gap-2 justify-start shadow-stone-900 dark:text-gray-50 shadow-2xl rounded-xl">
              <img src={foodoo} className="rounded-l-lg  md:w-1/2 w-1/1" />
              <div className="flex flex-col justify-between">
                <div className="p-3 text-xl leading-9">
                  {/* <h3 className="text-[#FE0039] text-5xl font-medium py-5 ">
                  Foodoo
                </h3> */}
                  <img className="w-2/5 p-3" src={foodooLogo} />
                  <p>This is a landing page for a fictional ai-company.</p>
                  <p>the website is build with React.</p>
                  <p>
                    styled with css modules and made responsive with the help of
                    media queries.
                  </p>
                </div>
                <div className="flex gap-3 justify-center p-5 text-1xl">
                  <a
                    target="_blank"
                    href="#"
                    className="flex items-center gap-2 ring-1 ring-gray-900  rounded-md p-1"
                  >
                    live <ImEye className="text-2xl" />
                  </a>
                  <a
                    target="_blank"
                    href="#"
                    className="flex items-center gap-2 ring-1 ring-gray-900  rounded-md p-1"
                  >
                    Github <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-start shadow-stone-900 dark:text-gray-50 shadow-2xl rounded-xl">
              <img src={mapty} className="rounded-l-lg  md:w-1/2 w-1/1" />
              <div className="flex flex-col justify-between">
                <div className="p-3 text-xl leading-9">
                  <h3 className="text-gray-100 text-5xl font-medium py-5 ">
                    Mapty
                  </h3>
                  {/* <img className="w-2/5 p-3" src={foodooLogo} /> */}
                  <p>
                    Simple app for saving your running and cycling activities
                  </p>
                  <p>Build with javascript.</p>
                  <p>
                    This project is one of the Learning projects of The Complete
                    JavaScript course by Jonas Schmedtmann.
                  </p>
                </div>
                <div className="flex gap-3 justify-center p-5 text-1xl">
                  <a
                    href="#"
                    className="flex items-center gap-2 ring-1 ring-gray-900  rounded-md p-1"
                  >
                    live <ImEye className="text-2xl" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 ring-1 ring-gray-900  rounded-md p-1"
                  >
                    Github <FaGithub />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 justify-start shadow-stone-900 dark:text-gray-50 shadow-2xl rounded-xl">
              <img src={bankist} className="rounded-l-lg  md:w-1/2 w-1/1" />
              <div className="flex flex-col justify-between">
                <div className="p-3 text-xl leading-9">
                  <h3 className="text-5xl font-medium py-5 ">Bankist</h3>
                  <p>
                    This is a landing page for a fictional bank. build with html
                    css and javascript.
                  </p>
                  <p>
                    One of the Learning projects of The Complete JavaScript
                    course by Jonas Schmedtmann.
                  </p>
                </div>
                <div className="flex gap-3 justify-center p-5 text-1xl">
                  <a
                    target="_blank"
                    href="https://glittering-tapioca-16a89c.netlify.app/"
                    className="flex items-center gap-2 ring-1 ring-gray-900  rounded-md p-1"
                  >
                    live <ImEye className="text-2xl" />
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/HamiHash/bankist"
                    className="flex items-center gap-2 ring-1 ring-gray-900  rounded-md p-1"
                  >
                    Github <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-start shadow-stone-900 dark:text-gray-50 shadow-2xl rounded-xl">
              <img
                src={pig}
                target="_blank"
                alt="pig game website"
                className="rounded-l-lg  md:w-1/2 w-1/1"
              />
              <div className="flex flex-col justify-between">
                <div className="p-3 text-xl leading-9">
                  <h3 className=" text-5xl font-medium py-5 ">Pig Game</h3>
                  <p>Simple 2-player dice game</p>
                  <p>
                    Each turn, a player repeatedly rolls a die until either a 1
                    is rolled or the player decides to "hold". The first player
                    to score 100 or more points wins.
                  </p>
                  <p>Build with javascript.</p>
                </div>
                <div className="flex gap-3 justify-center p-5 text-1xl">
                  <a
                    target="_blank"
                    href="https://pig-dicegame.vercel.app/"
                    className="flex items-center gap-2 ring-1 ring-gray-900  rounded-md p-1"
                  >
                    live <ImEye className="text-2xl" />
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/HamiHash/Pig-dice-game/tree/main"
                    className="flex items-center gap-2 ring-1 ring-gray-900  rounded-md p-1"
                  >
                    Github <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-start shadow-stone-900 dark:text-gray-50 shadow-2xl rounded-xl">
              <img
                src={guess}
                alt="foodoo website"
                className="rounded-l-lg  md:w-1/2 w-1/1"
              />
              <div className="flex flex-col justify-between">
                <div className="p-3 text-xl leading-9">
                  <h3 className="text-gray-100 text-5xl font-medium py-5 ">
                    Guess my number
                  </h3>
                  {/* <img className="w-2/5 p-3" src={foodooLogo} /> */}
                  <p>
                    In this game one should pick a number between 1 and 20 and
                    use the hint to guess the correct number.
                  </p>
                  <p>Build with javascript.</p>
                </div>
                <div className="flex gap-3 justify-center p-5 text-1xl">
                  <a
                    href="#"
                    className="flex items-center gap-2 ring-1 ring-gray-900  rounded-md p-1"
                  >
                    live <ImEye className="text-2xl" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 ring-1 ring-gray-900  rounded-md p-1"
                  >
                    Github <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 pb-36">
          <h3 className="text-gray-800 dark:text-gray-50 text-3xl py-1 font-medium">
            Contact me
          </h3>
          <div className="flex flex-col md:flex-row md:justify-around">
            <div className="flex flex-row md:flex-col justify-around mt-3 p-5 text-gray-800 dark:text-gray-50 md:f-1">
              <a
                target="_blank"
                href="https://wa.me/+989101163280"
                className="flex flex-col items-center gap-1 p-7  shadow-2xl  ring-1 ring-white rounded-2xl w-1/3 md:p-15  md:w-5/6 "
              >
                <SiWhatsapp className=" text-5xl" />
                <div className="mt-1">Whatsapp</div>
                <div>+989101163280</div>
              </a>
              <a
                target="_blank"
                href="mailto:hami.hash@icloud.com"
                className="truncate flex flex-col items-center gap-1 p-7  shadow-2xl ring-1 ring-white rounded-2xl w-1/3 md:p-15  md:w-5/6"
              >
                <IoMail className=" text-5xl" />
                <div>Mail</div>
                <div>hami.hash@icloud.com</div>
              </a>
            </div>

            <form
              id="contact"
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-3 mt-5 justify-center items-center dark:text-white text-gray-900 md:w-2/3"
            >
              <div className="flex flex-col gap-1">
                <label>Name</label>
                <input
                  className="rounded-xl p-3 w-96 transition-all text-gray-800 duration-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                  type="text"
                  name="name"
                  placeholder="Insert your name"
                ></input>
              </div>
              <div className="flex flex-col gap-1">
                <label>Mail</label>
                <input
                  className="rounded-xl p-3 w-96 transition-all text-gray-800 duration-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                  type="email"
                  name="email"
                  placeholder="Insert your email"
                ></input>
              </div>
              <div className="flex flex-col w-96 gap-1 ">
                <label>Message</label>
                <textarea
                  className="rounded-xl p-3 transition-all text-gray-800 duration-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Write your message"
                ></textarea>
                <button className="flex flex-row gap-3 items-center justify-center my-3 w-1/2  p-3 rounded-2xl bg-slate-100 text-gray-700 hover:bg-sky-300 hover:text-gray-900 transition-all duration-300">
                  Send Message <IoRocket className="text-2xl" />
                </button>
              </div>
            </form>
          </div>
        </section>

        <div className=" p-20  text-gray-100 text-3xl ">
          <Link
            to="top"
            activeClass="active"
            smooth={true}
            offset={0}
            duration={1000}
            style={{ cursor: "pointer" }}
            className="cursor-pointer flex items-center justify-center  gap-3 hover:text-blue-800 transition-all duration-500"
          >
            Scroll Top <BsFillArrowUpSquareFill />
          </Link>
        </div>
      </main>
    </div>
  );
}

export default App;
