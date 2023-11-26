import projects from "../data";
import skills from "../skills";
import Project from "./Project";
import Title from "./Title";
import "../styles/mediaquery.css";
import Skill from "./Skill";
function Main() {
  return (
    <main>
      <section className="projects" id="projects">
        <Title name="projects" />
        <div className="cards">
          {projects.length !== 0 ? (
            projects.map((proj) => <Project key={proj.id} proj={proj} />)
          ) : (
            <h3>No Projects here</h3>
          )}
        </div>
      </section>
      <section className="skills" id="skills">
        <Title name="skills" />
        <div className="skills-imgs">
          {skills.map((skill) => (
            <Skill skill={skill} key={skill.id} />
          ))}
        </div>
      </section>
      <section className="keep-touch">
        <div className="hire-me">
          <h1>GET IN TOUCH</h1>
          <div className="link">
            <a title="mail me" href="mailto:amrsalah.dev@gmail.com">
              Send Email
            </a>
            <span></span>
          </div>
        </div>
      </section>
      <footer>
        <p>Thanks for scrolling down here</p>
        <p>
          &copy; 2023 Designed and Coded By
          <a
            href="https://www.linkedin.com/in/amr-salah-b84978268/"
            title="go to my profile on linkedin"
            target="_blank"
          >
            Amr Salah
          </a>
          All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
export default Main;
