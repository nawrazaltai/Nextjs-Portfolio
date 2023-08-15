import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState, useRef, useEffect } from "react";

export default function Navbar({ openMenu, setOpenMenu, menuRef }) {
  const router = useRouter();
  const currentPath = router?.pathname;

  return (
    <nav className={styles.navbar_container}>
      <Link
        href="/"
        className={`${styles.nav_home_link} ${
          currentPath == "/" ? styles.active_link : ""
        }`}
      >
        Home
      </Link>
      {/* Gamla menyn
        <CgMenu
          onClick={(e) => {
            e.stopPropagation();
            setOpenMenu(!openMenu);
          }}
          className="hamburger-menu"
        /> */}
      <div
        className={styles.hamburger_menu}
        onClick={(e) => {
          e.stopPropagation();
          setOpenMenu(!openMenu);
        }}
      >
        <span
          className={`${styles.hamburger_span} ${
            openMenu ? styles.rotate : ""
          }`}
        ></span>
        <span
          className={`${styles.hamburger_span} ${
            openMenu ? styles.rotate : ""
          }`}
        ></span>
        <span
          className={`${styles.hamburger_span} ${
            openMenu ? styles.rotate : ""
          }`}
        ></span>
      </div>

      <ul
        ref={menuRef}
        className={`${[styles.nav_ul, styles.hidden_nav].join(" ")} ${
          openMenu ? styles.dropdown_nav : ""
        }`}
      >
        <li className={styles.dropdown_nav_li}>
          <Link
            href="/about"
            className={`${styles.link} ${
              currentPath == "/about" ? styles.active_link : ""
            }`}
          >
            About Me
          </Link>
        </li>
        <li className={styles.dropdown_nav_li}>
          <Link
            href="/skills"
            className={`${styles.link} ${
              currentPath == "/skills" ? styles.active_link : ""
            }`}
          >
            Skills
          </Link>
        </li>
        <li className={styles.dropdown_nav_li}>
          <Link
            href="/projects"
            className={`${styles.link} ${
              currentPath == "/projects" ? styles.active_link : ""
            }`}
          >
            Projects
          </Link>
        </li>
        <li className={styles.dropdown_nav_li}>
          <Link
            href="/contact"
            className={`${styles.link} ${
              currentPath == "/contact" ? styles.active_link : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}