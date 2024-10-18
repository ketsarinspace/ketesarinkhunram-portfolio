// react download file CV

import React from "react";
import CV from "../../assets/resume.pdf";
import { FiDownload } from "react-icons/fi";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn-header btn-white">
        Download CV
        <FiDownload className="image-icon" />
      </a>
      {/* <a href="#contact" className="btn-header  btn-white">
        Let's Talk
      </a> */}
    </div>
  );
};

export default CTA;
