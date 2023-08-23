import styles from "@/styles/Skills.module.css";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJest,
  SiNodedotjs,
  SiExpress,
  SiVercel,
} from "react-icons/si";
import { PiDatabase } from "react-icons/pi";
import { GrDeploy } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";

export default function Skills() {
  const skills = {
    Frontend: [
      { skill: "Javascript", icon: <SiJavascript /> },
      { skill: "HTML", icon: <SiHtml5 /> },
      { skill: "CSS", icon: <SiCss3 /> },
      { skill: "React", icon: <SiReact /> },
      { skill: "React Native", icon: <SiReact /> },
      { skill: "Tailwind", icon: <SiTailwindcss /> },
      { skill: "Next.js", icon: <SiNextdotjs /> },
      { skill: "Jest", icon: <SiJest /> },
    ],
    Backend: [
      { skill: "Node.js", icon: <SiNodedotjs /> },
      { skill: "Express", icon: <SiExpress /> },
      { skill: "DB Management", icon: <PiDatabase /> },
      { skill: "Version Control (Git)", icon: <FaGitAlt /> },
      { skill: "Deployment (Serverless & VPS)", icon: <SiVercel /> },
    ],
  };

  const skills_name = Object.keys(skills);

  return (
    <div className={styles.skills_container}>
      <div className={styles.skills_overview_div}>
        <h1 className={styles.skills_overview_title}>Skills overview</h1>
        <p className={styles.skills_overview_text}>
          I currently have 2 years of experience building websites & native
          applications. Below is a quick overview of my main technical skill
          sets and the tools I use.
        </p>
      </div>
      <div className={styles.skills_div}>
        <h3 className={styles.skill_title}>{skills_name[0]}</h3>
        <div className={styles.frontend_div}>
          {skills.Frontend.map(({ skill, icon }) => {
            return (
              <div className={styles.skill_card} key={skill}>
                <p className={styles.skill_icon}>{icon}</p>
                <p className={styles.skill_name}>{skill}</p>
              </div>
            );
          })}
        </div>
        <h3 className={styles.skill_title}>{skills_name[1]}</h3>
        <div className={styles.backend_div}>
          {skills.Backend.map(({ skill, icon }) => {
            return (
              <div className={styles.skill_card} key={skill}>
                <p className={styles.skill_icon}>{icon}</p>
                <p className={styles.skill_name}>{skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
