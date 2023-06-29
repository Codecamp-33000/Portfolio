/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { SiFigma, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { AiFillGithub, AiOutlineFundView } from "react-icons/ai";
import { LuWebhook } from "react-icons/lu";
const ProjectCard = (props) => {
  const icon = "text-white flex justify-center items-center";
  return (
    <div>
      <li><a href="https://e-commerce-me.vercel.app/" className="text-2xl font-HelloParisScript pb-10">{props.projectname}</a></li>
      <div className="w-full h-full group relative overflow-hidden border-2 border-white/50 rounded-xl my-4">
      <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
      <Image
        className="w-full h-full group-hover:scale-125 transition-all duration-500"
        src={props.image}
      />
      <div>
        <div className="absolute -bottom-full left-12 group-hover:bottom-32 group-hover:md:bottom-16 group-hover:xl:bottom-36   transition-all duration-500 z-40">
          <p className="py-6">
            Project 1 <span className="text-[#ccc] text-sm py-2">In 2022</span>
          </p>
          <h2 className="text-2xl  md:text-xl lg:text-2xl">{props.name}</h2>
          <div className="py-10 md:py-6 lg:py-10 flex items-center gap-6 md:gap-4 lg:gap-6">
            <span className={icon}>
              <SiReact size={25} />
            </span>
            <span className={icon}>
              <SiNextdotjs size={25} />
            </span>
            <span className={icon}>
              <SiTailwindcss size={25} />
            </span>
            <span className={icon}>
              <SiFigma size={25} />
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://e-commerce-me.vercel.app/">
              <button className="flex justify-center items-center gap-4 py-2 px-4 border-2 rounded-xl text-[#ccc]">
                <LuWebhook size={30} /> Open
              </button>
            </a>
            <a href="https://github.com/Codecamp-33000/e-commerce.git">
              <button className="flex justify-center items-center gap-4 py-2 px-4 bg-black text-[#ccc]">
                <AiFillGithub size={30} /> code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
