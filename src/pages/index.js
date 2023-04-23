import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import frontend from "../../public/frontend-logo.png";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content-div">
        <div className="home-upper-div">
          <h1 className="home-h1">
            I'm <span className="name-span">Nawras Altai</span>
          </h1>
          <p>
            A creative frontend developer based in Sweden. Although I'm still a
            junior in this field I'm really passionate about learning and coding
            native & web applications from scratch and bringing ideas to life on
            the web.
          </p>
          <a href="/about" className="home-button">
            More about me
          </a>
        </div>

        <Image
          className="landing-img"
          src={frontend}
          alt="developer animation"
        />
      </div>
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
