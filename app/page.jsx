/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import "@/public/globals.css";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Content from "./components/content";
import Main from "./components/main";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { menuList } from "./menulist";
import My from "../public/image/my.png";
import Logo from "@/public/favicon.ico";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMessage,
} from "react-icons/ai";
const Home = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  const MenuList = menuList.map((menu) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <button className="py-6">
        <Link
          onClick={() => setNav(false)}
          spy={true}
          smooth={true}
          offset={10}
          duration={300}
          className="px-10 md:px-4 py-4 md:ml-6 rounded-lg cursor-pointer uppercase"
          to={menu.name}
          activeClass={menu.activeClass}
        >
          {menu.name}
        </Link>
      </button>
    );
  });
  return (
    <div
      id="home"
      className="w-full h-full font-Butler font-extralight  overflow-hidden scroll-smooth px-4"
    >
      <div className="max-w-[1280px] w-full min-h-screen mx-auto text-[#cccccc]">
        <div className="w-full h-20 ">
          <div className="max-w-[1280px] w-full mx-auto h-20 py-2 ">
            <div
              className={
                shadow
                  ? "fixed z-50 max-w-[1280px] w-full h-20 shadow-xl flex items-center justify-between px-4"
                  : "fixed z-50 max-w-[1280px] w-full h-20 flex items-center justify-between px-4"
              }
            >
              <Link
                className="my-6"
                to="home"
                spy={true}
                smooth={true}
                duration={300}
              >
                <Image src={Logo} width={50} height={50} />
              </Link>
              <div
                className={
                  nav
                    ? "fixed left-0 md:left-[-100%] top-0 w-[75%] mx-auto md:mx-auto min-h-screen bg-gradient-to-bl from-[#0F172A] to-[#0D2B43] ease-in duration-300 z-10 "
                    : "fixed left-[-100%]  w-[75%] min-h-screen mx-auto top-0 bg-gradient-to-bl from-[#0F172A] to-[#0D2B43]  ease-in duration-500 z-10 "
                }
              >
                <div className="w-full h-full flex flex-col items-center px-4 py-10">
                  <div className="w-36 py-10">
                    <Image src={My} />
                  </div>{" "}
                  <span class="w-full p-[1px] bg-white"></span>
                  {MenuList}
                  <div className=" flex items-center gap-4 py-4">
                    {" "}
                    <a
                      href="https://www.facebook.com/shine33000?mibextid=ZbWKwL"
                      className="  w-[50px]  h-[50px] border text-white rounded-full flex justify-center items-center hover:scale-150"
                    >
                      <AiFillFacebook size={30} />{" "}
                    </a>{" "}
                    <a
                      href="https://www.linkedin.com/in/shine-wan-na-509a29262"
                      className="  w-[50px]  h-[50px] border text-white rounded-full flex justify-center items-center hover:scale-150 cursor-pointer"
                    >
                      <AiFillLinkedin size={30} />
                    </a>{" "}
                    <a
                      href="https://github.com/Codecamp-33000"
                      className="  w-[50px]  h-[50px] border text-white rounded-full flex justify-center items-center hover:scale-150 cursor-pointer"
                    >
                      <AiFillGithub size={30} />
                    </a>{" "}
                    <a
                      href="https://instagram.com/sxine_1500?igshid=MzNlNGNkZWQ4Mg=="
                      className="  w-[50px]  h-[50px] border text-white rounded-full flex justify-center items-center hover:scale-150 cursor-pointer"
                    >
                      <AiFillInstagram size={30} />
                    </a>{" "}
                    <a
                      href="http://codecamp33000@gmail.com"
                      className="  w-[50px] h-[50px] border text-white rounded-full flex justify-center items-center hover:scale-150 cursor-pointer"
                    >
                      <AiFillMessage size={30} />
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className=" hidden md:flex items-center scroll-smooth  ">
                {MenuList}
              </div>
              <div className="md:hidden">
                {nav ? (
                  <button onClick={() => setNav(false)}>
                    <AiOutlineClose size={30} />
                  </button>
                ) : (
                  <button onClick={() => setNav(true)}>
                    {" "}
                    <AiOutlineMenu size={30} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Main />
          <About />
          <Skills />
          <Projects />
          <Content />
        </div>
      </div>
    </div>
  );
};
export default Home;
