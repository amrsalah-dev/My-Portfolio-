import React, { useEffect } from "react";

const Skill = ({ skill }) => {
  useEffect(() => {
    AOS.init();
  });

  const { name, imgUrl } = skill;
  return (
    <div data-aos="zoom-in" className="skill-img">
      <img src={imgUrl} alt={`${name} logo`} />
      <span>{name}</span>
    </div>
  );
};

export default Skill;
