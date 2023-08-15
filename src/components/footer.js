import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import { FaSquareGithub, FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import {} from "react-icons/fa";

import { useState, useRef, useEffect } from "react";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <h3 className={styles.footer_fullname}>Nawras Altai</h3>
      <ul className={styles.footer_socials_ul}>
        <li>
          <Link
            className={styles.socials_link}
            href="https://github.com/nawrazaltai"
          >
            <FaSquareGithub size={45} />
          </Link>
        </li>
        <li>
          <Link
            href="https://linkedin.com/in/nawras-altai"
            className={styles.socials_link}
          >
            <FaLinkedin size={45} />
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.socials_link}>
            <FaSquareTwitter size={45} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
