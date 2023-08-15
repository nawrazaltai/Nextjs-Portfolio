import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import frontend from "../../public/frontend-logo.png";
import { BsCodeSlash } from "react-icons/bs";
import { MdOutlineDevicesOther, MdOutlineDesignServices } from "react-icons/md";
import teamWork from "../../public/interview.png";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const skillsArray = [
    {
      id: 0,
      skill: "Web Development",
      icon: <BsCodeSlash size={52} color="black" />,
    },
    {
      id: 1,
      skill: "Native Applications",
      icon: <MdOutlineDevicesOther size={52} color="black" />,
    },
    {
      id: 2,
      skill: "Design user-friendly websites and applications",
      icon: <MdOutlineDesignServices size={52} color="black" />,
    },
  ];

  return (
    <div className={styles.home_container}>
      <div className={styles.home_content_div}>
        <div className={styles.home_upper_div}>
          <h1 className={styles.home_h1}>
            Nawras Altai,
            <br />
            <span className={styles.name_span}>Frontend developer</span>
          </h1>
          <p className={styles.home_p}>
            Hello there! I'm Nawras, a creative frontend developer based in
            Sweden. Although I'm still a junior in this field I'm really
            passionate about learning and coding native & web applications from
            scratch and bringing ideas to life on the web.
          </p>
          <a href="/about" className={styles.home_button}>
            More about me
          </a>
        </div>
      </div>
      <section className={styles.what_i_do_div}>
        <h2 className={styles.what_i_do_h2}>This is what I do</h2>

        <div className={styles.skills_div}>
          {skillsArray.map((skill) => {
            return (
              <article className={styles.skill_article} id={skill.id}>
                <div>{skill.icon}</div>
                <p className={styles.skill_p}>{skill.skill}</p>
              </article>
            );
          })}
        </div>
      </section>
      <div className={styles.work_together_div}>
        <h2 className={styles.work_together_h2}>Lets work together!</h2>
        <div className={styles.work_together_content}>
          <p className={styles.work_together_p}>
            If you are interested in building a new website or an application, I
            am more than happy to help you out with your new project.
            <br />
            Or if you would like to talk about job opportunities at your
            company, collaborate with me or just give me some advice, you can
            always reach out to me!
          </p>

          <Image
            className={styles.teamwork_img}
            src={teamWork}
            width={450}
            height={350}
            alt="Interview"
          />
        </div>
        <a href="/contact" className={styles.home_contact_me_button}>
          Contact me here
        </a>
      </div>
    </div>
  );
}
