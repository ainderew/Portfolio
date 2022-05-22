import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../framer-animation/variants";

const Contact: React.FC = () => {
  return (
    <motion.div
    variants={staggerContainer}
    className="w-full h-screen bg-white">
      <div className="w-[90%] h-full flex flex-col gap-4 justify-center items-center mx-auto">
        <motion.p
       initial={{
           opacity: 0,
           y:40
       }}
        whileInView={{
            opacity: 1,
            y:0,
            transition:{
                delay: .3
            }
        }}
        className="text-accent text-2xl">Get in touch</motion.p>
        <motion.p
       initial={{
           opacity: 0,
           y:40
       }}
        whileInView={{
            opacity: 1,
            y:0,
            transition:{
                delay: .3
            }
        }}
        className="text-5xl font-semibold">Let's Talk It Out</motion.p>
        <motion.p
       initial={{
           opacity: 0,
           y:40
       }}
        whileInView={{
            opacity: 1,
            y:0,
            transition:{
                delay: .3
            }
        }}
        className="break-words w-[30%] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
          reiciendis quam neque sequi, enim nobis illum, repellat officiis
          laudantium nam quisquam quibusdam molestias amet natus.
        </motion.p>

        <motion.button

       initial={{
           opacity: 0,
           y:40
       }}
        whileInView={{
            opacity: 1,
            y:0,
            transition:{
                delay: .3
            }
        }}
        className="border-2 border-accent text-accent font-medium px-7 py-3 mt-8">
          Say Hello
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Contact;
