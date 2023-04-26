import "@/styles/globals.css";
import Image from "next/image";
import seagull from "../../public/seagull.png";
import { CgMenu } from "react-icons/cg";
import { useState, useRef, useEffect, use } from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export default function App({ Component, pageProps }) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div className="">
      <nav className="">
        <a className="nav-home-link" href="/">
          <Image className="logo" src={seagull} alt="Seagull Logo" />
        </a>
        {/* Gamla menyn
        <CgMenu
          onClick={(e) => {
            e.stopPropagation();
            setOpenMenu(!openMenu);
          }}
          className="hamburger-menu"
        /> */}
        <div
          className="hamburger-menu"
          onClick={(e) => {
            e.stopPropagation();
            setOpenMenu(!openMenu);
          }}
        >
          <span className={`hamburger-span ${openMenu ? "rotate" : ""}`}></span>
          <span className={`hamburger-span ${openMenu ? "rotate" : ""}`}></span>
          <span className={`hamburger-span ${openMenu ? "rotate" : ""}`}></span>
        </div>

        <ul
          ref={menuRef}
          className={`nav-ul hidden-nav ${openMenu ? "dropdown-nav" : ""}`}
        >
          <li>
            <a href="/about">About me</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
      <div className="home-svg-div">
        <ul className="socials-ul">
          <li>
            <a href="/">
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a href="/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitterSquare />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
