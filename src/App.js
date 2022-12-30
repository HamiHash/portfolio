import { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import deved from "./Img/dev-ed-wave.png";
import web1 from "./Img/web1.png";
import web2 from "./Img/web2.png";
import web3 from "./Img/web3.png";
import web4 from "./Img/web4.png";
import web5 from "./Img/web5.png";
import web6 from "./Img/web6.png";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="transition-all duration-700 bg-light-pattern bg-cover bg-fixed px-10 md:px-20 lg:px-40 dark:bg-dark-pattern ">
        <section className=" min-h-screen">
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
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="font-burtons text-5xl py-2 text-teal-500 dark:text-teal-200 font-normal md:text-6xl ">
              hamed hashemi
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-50">
              Junior front-end developer.
            </h3>
            <p className="text-md py-5 leading-8 dark:text-gray-100 text-gray-800 md:text-xl max-w-xl mx-auto">
              Motivated to grow and a fast learner. join me below and lets get
              cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-white ">
            <a href="https://github.com/HamiHash">
              <FaGithub className="hover:text-[#643050] hover:-translate-y-2 transition-all duration-500" />
            </a>
            <a href="https://twitter.com/hami_hash">
              <FaTwitter className="hover:text-[#643050] hover:-translate-y-2 transition-all duration-500" />
            </a>
            <a href="https://www.linkedin.com/in/hamed-hashemi-101259260/">
              <FaLinkedin className="hover:text-[#643050] hover:-translate-y-2 transition-all duration-500" />
            </a>
          </div>
          <div className=" relative mx-auto  rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <img src={deved} fill objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h2 className="text-gray-800 dark:text-gray-50 text-3xl py-1 font-medium">
              About me
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 font-light dark:text-gray-200">
              Greetings, I am Chris Benjamin! I've been an IT Professional for
              over 15 years and have worked in a variety of industries and held
              various IT roles including Technician, IT Manager, IT Director,
              Chief Information Security Officer, and System Administrator. I
              earned by Bachelor's of Computer Science Degree from DeVry
              University in 2013 where I studied Web Application Administration
              and Design. I went on to earn my Master's of Computer Science in
              2018 where I focused on IT Management. I have the skills and
              experience to help your business grow its web presence and make an
              impact on the internet.
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
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </div>
            <div className="flex-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-gray-800 dark:text-gray-50 text-3xl py-1 font-medium">
              Portofolio
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 font-light dark:text-gray-200">
              These are some of the projects that I've worked on
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10  ">
            <div className="flex gap-4 justify-start shadow-stone-900 shadow-2xl rounded-xl">
              <img src={web1} className="rounded-l-lg object-cover w-1/2" />
              <div>
                <h3>NIKE</h3>
                <p>
                  I've doe nasf;lkaspf pasdksakd;als
                  das;ld;lsakd;lasdsedgiuwrqd;lk
                </p>
              </div>
            </div>
            <div className="flex ">
              <img src={web2} className="rounded-lg object-cover" />
            </div>
            <div className="flex ">
              <img src={web3} className="rounded-lg object-cover" />
            </div>
            <div className="flex">
              <img src={web4} className="rounded-lg object-cover" />
            </div>
            <div className="flex ">
              <img src={web5} className="rounded-lg object-cover" />
            </div>
            <div className="flex ">
              <img src={web6} className="rounded-lg object-cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
