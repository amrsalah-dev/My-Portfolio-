import Contact from "./Contact";
import "../styles/mediaquery.css";
// import moonImg from "../assets/images/moon.73eb78776036b6bf5ced.png";
// import moonImg from "../assets/images/moon.png";
// import sunImg from "../assets/images/sun.63b6ae7294e3139a8a0c.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";
function Aside({
  social,
  handleChangeTheme,
  isDark,
  isFlex,
  setFlex,
  handleRightClick,
}) {
  return (
    <aside className={`${isFlex && "flex"}`}>
      <header>
        <nav>
          <div className="logo">
            <img
              onDragStart={handleRightClick}
              src="./photo_2023-03-15_11-50-21.jpg"
              alt="Amr's photo: A man with long hair and a long beard wearing a shirt"
            />
          </div>
          <div className="nav-info">
            <h1>Amr Salah</h1>
            <p>
              {"<"} Frontend Developer {"/>"}
            </p>
          </div>
          <button
            id="toggle-theme"
            className="theme-btn"
            aria-label="change theme"
            title="change theme"
            onClick={handleChangeTheme}
          >
            {/* {isDark === "dark" ? (
              <img src={moonImg} alt="" />
            ) : (
              <img src={sunImg} />
            )} */}

            <FontAwesomeIcon
              icon={isDark === "dark" ? faMoon : faSun}
              className="my-icon-class"
            />
          </button>
        </nav>
      </header>
      {/* <button onClick={setFlex}>Change Layout</button> */}

      <section className="about" id="about">
        <Title name="about" />
        <div>
          <p>
            I'm a junior frontend web developer with a passion for building
            amazing and functional websites. I have a solid understanding of
            HTML, CSS (sass, bootstrap, tailwind, material ui, chakra ui), and
            JavaScript, and React js.
            <br />
            I'm a fast learner and always eager to take on new challenges and
            expand my skill set.
            <br />
            {/* <br /> I'm a strong communicator and enjoy collaborating with others
            to create high-quality web experiences. */}
            I'm also an avid learner and enjoy staying up-to-date with the
            latest industry trends and developments.
          </p>
          <p>
            Download my{" "}
            <a href="#" title="download my resume">
              Resume
            </a>
          </p>
        </div>
      </section>
      <section className="contact" id="contact">
        <Title name="contact" />
        <ul>
          {social.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </ul>
      </section>
    </aside>
  );
}
export default Aside;
