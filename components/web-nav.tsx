import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../framer-animation/variants";
const WebNav: React.FC = () => {
  return (
    <div className="hidden fixed top-0 w-full h-[5rem] xl:flex justify-between items-center z-20 px-64 ">
      <motion.div
        variants={fadeIn("up")}
        className="logo flex-1 "
      >
        <h2 className="text-4xl">A</h2>
      </motion.div>
      <div className="flex-[2] bosrder-2 border-white">
        <ul className="justify-end flex gap-4 px-10">
          <motion.li variants={fadeIn("up")} className="text-regular ">
            About
          </motion.li>
          <motion.li variants={fadeIn("up")} className="text-regular ">
            Works
          </motion.li>
          <motion.li variants={fadeIn("up")} className="text-regular ">
            Contact
          </motion.li>
        </ul>
      </div>
      <motion.div variants={fadeIn("up")} className="">
        <button className="px-6 py-2 border-2 border-[#0AA1DD] text-[#0AA1DD]">Resume</button>
      </motion.div>
    </div>
  );
};

export default WebNav;
