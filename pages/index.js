// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { easeInOut, motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/30 h-full align-middle ">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r   via-black/30 ">
        <div className="text-center flex flex-col justify-top xl:pt-20 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-3xl z-[50] pt-12 lg:pt-5 xl:pt-0 lg:text-5xl"
          >
            Student <br /> of {" "}
            <span className="text-accent">Academlo</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md z-[50] line-clamp-6 sm:line-clamp-none xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 "
          >
            Hello, I'm Kevin Polo. I'm studying programming since quarantine and I have been certified in some technologies such as React, CSS, HTML, Javascript among others, in addition to studying in an academy such as Academlo, which has helped me have a different approach to this world of programming.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden z-10 relative">
            <ProjectsBtn className="translate-z-10" />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex z-10"
          >
            <ProjectsBtn className="translate-z-10 " />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer/>
        {/* avatar img */}
        <motion.div
          className="w-full h-full max-w-[550px] max-h-[600px] absolute  -bottom-30 lg:bottom-0 lg:right-[8%]"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          transition={{duration: 1, ease: 'easeInOut'}}
          exit="hidden"
        >
          <Avatar className=" right-0 bottom-0"/>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
