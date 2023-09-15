import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAngular,
  FaFigma,
  FaNpm,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaAngular />,
          <SiTailwindcss />,
          <SiVite />,
          <FaNpm />,
          <FaGitAlt />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Technologist - information analysis and development",
        stage: "2020 - 2021",
      },
      {
        title: "web development fundamentals - Academlo",
        stage: "2022 - 2022",
      },
      {
        title: "Web Application Development with React - Academlo",
        stage: "2022 - 2022",
      },
      {
        title: "Bubble - Udemy",
        stage: "2021 - 2021",
      },
      {
        title: "Dart - Udemy",
        stage: "2021 - 2021",
      },
      {
        title: "Angular - Udemy",
        stage: "2021 - 2021",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Internship - Double V Partners Bogota",
        stage: "2021 - 2021",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Technologist - information analysis and development",
        stage: "2020 - 2021",
      },
      {
        title: "web development fundamentals - Academlo",
        stage: "2022 - 2022",
      },
      {
        title: "Web Application Development with React - Academlo",
        stage: "2022 - 2022",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counters
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30  pb-32 align-middle  text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute top-40 -left-[370px]"
      >
        <img src="/avatar1.png" />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center pt-5 sm:pt-10 xl:pt-24 lg:mt-0 z-50 xl:flex-row gap-x-6 ">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 md:hidden xl:block z-[50]"
          >
            WEB <span className="text-accent">DEVELOPER</span>.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:block z-[50] "
          >
            Adsi technologist with experience in web development, databases and
            management of apis requests. interested in joining a development
            team to contribute with innovative projects in order to satisfied
            the customer.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6 ">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl text-accent font-extrabold mb-2">
                  <CountUp start={0} end={1} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[150px]  text-white font-bold">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1  after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl text-accent font-extrabold mb-2">
                  <CountUp start={0} end={20} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[150px]  text-white font-bold">
                  finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8  mx-auto xl:mx-0 mb-4 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
