import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          ></img>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-2-31 leading-[30px]"
      >
        Welcome to my portfolio website! I am an
        <span className="text-[#FEFF86]"> MSc Software Systems graduate</span>
        &nbsp; from the
        <span className="text-[#79E0EE]"> University of Bath</span>,
        specializing in software development. Currently employed as a{" "}
        <span className="text-[#F6995C]"> Full-stack developer.</span>{" "}
        Proficient in <span className="text-[#FA7070]">Python</span> and
        <span className="text-[#FFB72B]"> JavaScript</span>, I am expanding my
        skill set with expertise in frameworks like
        <span className="text-[#3797A4]"> React</span>,
        <span className="text-[#B3E283]"> Node.js</span>
        {/* <br className="sm:block hidden" /> */} and
        <span className="text-[#EFBBCF]"> Three.js</span>. Additionally, I am{" "}
        <span className="text-[#FF8911]">AWS</span>{" "}
        <span className="text-[#D7FFFD]">Cloud Certified</span> with a solid
        foundation in back-end developmentand databases including&nbsp;
        <span className="text-[#27AA80]">MongoDB </span>
        and <span className="text-[#FF9234]">MySQL</span>. As a quick learner, I
        am eager to collaborate closely with clients to deliver efficient,
        scalable, and user-friendly solutions.
        <span className="text-[#CCF0C3]">
          {" "}
          Let's transform your ideas into reality by working together!
        </span>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </Fragment>
  );
};

export default SectionWrapper(About, "about");
