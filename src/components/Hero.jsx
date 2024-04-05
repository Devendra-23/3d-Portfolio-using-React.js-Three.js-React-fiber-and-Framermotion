import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-full mx-auto">
      <div
        className={`${styles.paddingX} relative inset-0 top-[85px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>
            Hello, I'm <span className="text-[#915eff]">Devendra</span>
          </h1>
          <p className={`${styles.heroSubText}mt-2 text-white-100`}>
            <span className="text-[#E6DD3B]">Full Stack Software Engineer</span>
            {/* <br className="sm:block hidden" />
            proficient in programming languages, web technologies &{" "}
            <span className="text-[#00FFCA]">cloud computing.</span> */}
            {/* <br className="sm:block hidden" /> passionate about software
            development and determined
            <br className="sm:block hidden" /> to become a skilled&nbsp;
            <span className="text-[#00FFCA]">Software Engineer</span>. */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
