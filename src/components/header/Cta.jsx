import React from "react";
// import resume from "../../assets/resume.pdf"
// import resume from "../../assets/resume.pages"
import resume from "../../assets/renzo_silva_software_engineering.pdf";

const Cta = () => {
  return (
    <div className="cta">
      <a href={resume} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Cta;
