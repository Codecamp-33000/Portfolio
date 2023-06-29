/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Figma from "../../public/image/figma.png";
import AdobeXD from "../../public/image/adobeXd.png";
import AdobeIndesign from "../../public/image/adobeIndesign.png";
import AdobePhotoshop from "../../public/image/adobePhotoshop.png";
import Circle from "./circle";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.js";
// eslint-disable-next-line react/display-name
const Skills = () => {
  const borderGroup =
    "flex flex-col justify-center items-center gap-4 hover:scale-150  transition-all duration-500 ";
  const border =
    "border-4 shadow-2xl shadow-[#BE04FF] border-[#BE04FF] rounded-full";
  return (
    <div id="skills" className="container mx-auto w-full min-h-screen flex flex-col justify-center items-center py-20">
      <motion.div
        className="w-full h-full "
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="text-center py-6">
          <h2 className=" font-HelloParisScript text-2xl tracking-widest bg-gradient-to-r from-[#BE04FF] to-white/50 inline-block text-transparent bg-clip-text">
            Front-End Skills
          </h2>
        </div>
        <div className="">
          <div className="px-4 grid grid-cols-3  md:grid-cols-4  gap-10 place-content-center">
            <Circle circle="Circle-1" number={88} name="HTML" />
            <Circle circle="Circle-2" number={70} name="CSS" />
            <Circle circle="Circle-3" number={68} name="JavaScript" />
            <Circle circle="Circle-4" number={50} name="Jquery" />
            <Circle circle="Circle-5" number={78} name="TailwindCSS" />
            <Circle circle="Circle-6" number={72} name="React" />
            <Circle circle="Circle-7" number={64} name="Nextjs" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-full h-full "
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="text-center py-6">
          <h2 className=" font-HelloParisScript text-2xl tracking-widest bg-gradient-to-r from-[#BE04FF] to-white/50 inline-block text-transparent bg-clip-text">
            UI / UX Tools
          </h2>
        </div>
        <div className="flex justify-center items-center py-4">
          <div className="grid grid-cols-2 gap-20 ">
            <div className={borderGroup}>
              <div className={border}>
                <Image
                  className="p-3 bg-black rounded-full"
                  width={70}
                  height={70}
                  src={Figma}
                />
              </div>
              <p>Figma</p>
            </div>
            <div className={borderGroup}>
              <div className={border}>
                <Image
                  className="p-3 bg-black rounded-full"
                  width={70}
                  height={70}
                  src={AdobeXD}
                />
              </div>
              <p>Adobe XD</p>
            </div>
            <div className={borderGroup}>
              <div className={border}>
                <Image
                  className="p-3 bg-black rounded-full"
                  width={70}
                  height={70}
                  src={AdobeIndesign}
                />
              </div>
              <p>Adobe Indesign</p>
            </div>
            <div className={borderGroup}>
              <div className={border}>
                <Image
                  className="p-3 bg-black rounded-full"
                  width={70}
                  height={70}
                  src={AdobePhotoshop}
                />
              </div>
              <p>Adobe Photoshop</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
