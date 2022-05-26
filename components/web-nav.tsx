// import { , useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../framer-animation/variants";
import { useScrollHider } from "../hooks/scrollHide";

interface props {
  scrollToWork: () => void;
  scrollToAbout: () => void;
  scrollToContact: () => void;
}

const WebNav: React.FC<props> = ({
  scrollToWork,
  scrollToAbout,
  scrollToContact,
}: props) => {
  const classValue = useScrollHider();

  return (
    <div
      className={`fixed top-0 w-full h-[5rem] hidden xl:flex justify-between items-center z-20 px-64 ${classValue} `}
    >
      <motion.div variants={fadeIn("up")} className="logo flex-1 ">
        <h2 className="text-4xl">A</h2>
      </motion.div>
      <div className="flex-[2] bosrder-2 border-white">
        <ul className="justify-end flex gap-4 px-10">
          <motion.li
            onClick={scrollToAbout}
            variants={fadeIn("up")}
            className="text-base font-normal hover:text-accent cursor-pointer transition-all duration-150"
          >
            About
          </motion.li>
          <motion.li
            onClick={scrollToWork}
            variants={fadeIn("up")}
            className="text-base font-normal hover:text-accent cursor-pointer transition-all duration-150"
          >
            Works
          </motion.li>
          <motion.li
            onClick={scrollToContact}
            variants={fadeIn("up")}
            className="text-base font-normal hover:text-accent cursor-pointer transition-all duration-150"
          >
            Contact
          </motion.li>
        </ul>
      </div>
      <motion.div variants={fadeIn("up")} className="">
        <button className="px-6 py-2 border-2 border-[#0AA1DD] text-[#0AA1DD]">
          Resume
        </button>
      </motion.div>
    </div>
  );
};

export default WebNav;
