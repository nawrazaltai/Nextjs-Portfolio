import styles from "@/styles/About.module.css";

export default function About() {
  const myAge = 2023 - 1994;

  return (
    <div className={styles.container}>
      <div className={styles.who_am_i_div}>
        <h1 className={styles.who_am_i_title}>So, who am I?</h1>
        <p className={styles.who_am_i_paragraphs}>
          My name is Nawras Altai and I'm a {myAge} year old frontend-developer
          student from Sweden. Apart from studying I'm currently working as a
          mentor at an upper secondary school and I have been doing that the for
          the last 5 years. My main tasks are to design schedueles and create
          study plan for our students, make sure the students complete their
          study plan and lead meetings with teachers and principals. The job
          itself is challenging and I enjoy the responsibilities that comes with
          it, however it's nothing I'm passionate about. So I decided to change
          course to something I really like and is passionate about.
          <br />
          <br />I started my journey in Tech by studying DevOps in 2021.
          Learning Python, Bash, monitoring and automating was a great
          experience. But ending that semester with a frontend project made me
          realise that I really prefer frontend work rather than backend. Making
          the change from DevOps to frontend developing was at the end of the
          day an easy choice because since I was a kid I've always liked
          creating websites (at that time using online templates and knowing 0
          about HTML and web development). And that is how my journey as a
          frontend-developer started in the summer of '22 at Chas Academy in
          Stockholm. We started out learning the basics of HTML, CSS and
          Javascript, which I now feel pretty confident using. Six months in to
          the semester we started working with React and that's what I've been
          working with mostly since the start of 2023. Apart from React I've
          been wokring alot with React Native.
          <br />
          <br />
          My short term goals for the nearest future are to get as good as
          possible with Javascript and continue mastering React/React Native. In
          fall of 2023 I will also be learning TypeScript. The main focus will
          be to secure an internship at company with the right environment for
          me to take my knowledge to the next level while showing my skills and
          abilities.
        </p>
      </div>
    </div>
  );
}
