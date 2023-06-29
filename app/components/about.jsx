/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.js";
import My from "../../public/image/my.png";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMessage,
} from "react-icons/ai";
// eslint-disable-next-line react/display-name

const About = () => {
  const contentGp = "flex flex-col gap-6 justify-center items-center "
  const content =
    "w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-gradient-to-r from-[#FF00F5] to-white/30 rounded-full flex justify-center items-center cursor-pointer hover:scale-150 transition-all  duration-500";
  return (
    <div
      id="about"
      className="container mx-auto w-full min-h-screen flex flex-col justify-center items-center "
    >
      <div className="max-w-[1000px] w-full mx-auto flex flex-col justify-center items-center">
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col justify-center items-center"
        >
          <h2 className=" font-HelloParisScript text-2xl tracking-widest bg-gradient-to-r from-[#FF00F5] to-white/50 inline-block text-transparent bg-clip-text py-6">
            About
          </h2>
          <Image src={My} className="w-40 h-40 rounded-full my-2" />
        </motion.div>
        <motion.p
          variants={fadeIn("right", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="container mx-auto py-4  inline-block tracking-wider leading-loose whitespace-normal text-base  text-[#cccccc] text-center"
        >
          Welcome to my portfolio website! I'm Shine Wan Na, a versatile
          professional with a passion for frontend development and UI/UX design.
          With a keen eye for aesthetics and a deep understanding of
          user-centric design principles, I strive to create engaging and
          intuitive digital experiences. As a frontend developer, I excel in
          crafting clean, responsive, and accessible code to bring designs to
          life. Leveraging my skills in HTML, CSS, JavaScript, and various
          frameworks, I enjoy transforming ideas into visually stunning and
          functional websites. My expertise in UI/UX design allows me to
          empathize with users, ensuring seamless interactions and compelling
          visual interfaces. I am constantly evolving in this dynamic field,
          exploring the latest design trends and technologies to deliver
          innovative solutions. Join me on this exciting journey as we shape the
          digital landscape together.
        </motion.p>
      </div>
      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full h-full flex justify-center items-center py-10 "
      >
        <div className="flex justify-center items-center gap-8 px-4">
          <div className={contentGp}>
            {" "}
            <a href="https://www.facebook.com/shine33000?mibextid=ZbWKwL" className={content}>
              <AiFillFacebook size={30} />{" "}
            </a>{" "}
            <p>Facebook</p>
          </div>
          <div className={contentGp}>
            <a href="https://www.linkedin.com/in/shine-wan-na-509a29262"  className={content}>
              <AiFillLinkedin size={30} />
            </a>{" "}
            <p>Linkedin</p>
          </div>
          <div className={contentGp}>
            <a href="https://github.com/Codecamp-33000" className={content}>
              <AiFillGithub size={30} />
            </a>{" "}
            <p>Github</p>
          </div>
          <div className={contentGp}>
            {" "}
            <a href="https://instagram.com/sxine_1500?igshid=MzNlNGNkZWQ4Mg==" className={content}>
              <AiFillInstagram size={30} />
            </a>
            <p>Instargram</p>
          </div>
          <div className={contentGp}>
            {" "}
            <a href="http://codecamp33000@gmail.com" className={content}>
              <AiFillMessage size={30} />
            </a>{" "}
            <p>Message</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
