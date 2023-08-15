import "@/styles/globals.css";
import Image from "next/image";
import seagull from "../../public/seagull.png";
import { CgMenu } from "react-icons/cg";
import { useState, useRef, useEffect, use } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef?.current?.contains(e.target)) {
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
      <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} menuRef={menuRef} />
      <Component {...pageProps} />
      <Footer />
      {/* <div className="home-svg-div">
        <ul className="socials-ul">
          <li>
            <a href="https://github.com/nawrazaltai">
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nawras-altai">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitterSquare />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
