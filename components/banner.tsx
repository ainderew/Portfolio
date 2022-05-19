import Image from "next/image";
import me from "../assets/me.png";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../framer-animation/variants";

const Banner: React.FC = () => {
  return (
    <div className="w-full h-screen relative flex flex-col gap-2 justify-center px-7 xl:px-64  bg-[#[#EFEFEF]">
      <motion.p variants={fadeIn("up")} className="text-lg text-[#0AA1DD]">
        Hi, my name is
      </motion.p>
      <motion.h1 variants={fadeIn("up")} className="text-5xl font-semibold">
        Andrew Pinon
      </motion.h1>
      <motion.h2
        variants={fadeIn("up")}
        className="text-5xl font-semibold text-[#0AA1DD]"
      >
        I'm a full-stack web developer.
      </motion.h2>

      <motion.p
        variants={fadeIn("up")}
        className="text- 2xl:break-words 2xl:w-[40%] text-justify mt-7"
      >
        I'm a Philippine based software engineer that has knack for creating and
        building digital solutions to problems on the web. Currently I'm
        freelancing and if you're ready to create an exceptional digital
        experience let's get in contact.
      </motion.p>

      <motion.button
        variants={fadeIn("up")}
        className="h-[3rem] w-[10rem] text-base border-[#0AA1DD] text-[#0AA1DD] border-2 mt-7"
      >
        My work
      </motion.button>
    </div>
  );
};

export default Banner;
