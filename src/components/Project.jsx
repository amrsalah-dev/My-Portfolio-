import Button from "./Button";
import "../styles/project.css";
import { useEffect } from "react";
function Project({ proj }) {
  const { img, name, desc, code, demo, date, tech } = proj;

  useEffect(() => {
    AOS.init();
  });

  return (
    // data-aos="fade-up"

    // <div className="card-parent">
    //   <div className="dots">
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //   </div>
    <div
      className="card"
      // data-aos="zoom-in-left"
      data-aos="zoom-in-up"
      style={{
        transition: "0.3s box-shadow ease,0.3s border-raduis ease",
      }}
    >
      <div className="card-img">
        <img src={img} alt="" />
        {/* <iframe
          src={demo}
          name="iframe_a"
          height="100%"
          width={"100%"}
        ></iframe> */}
      </div>
      <div className="card-info">
        <h1>{name}</h1>
        <div className="card-tech">
          {tech.map((tech, index) => (
            <span className={tech} key={index}>
              {tech}
            </span>
          ))}
        </div>
        <p>{desc}</p>
        <div className="card-links">
          <Button
            pathlink={demo}
            text={"Visit Site"}
            title={"go to visit site"}
          >
            <i className="fa-solid fa-link"></i>
          </Button>
          <Button
            pathlink={code}
            text={"Source Code"}
            title={"go to github to view source code"}
          >
            <i className="fa-brands fa-github"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Project;
