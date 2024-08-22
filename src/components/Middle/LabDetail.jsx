import { useState } from "react";
import "./LabDetail.css";

export const LabDetail = () => {
  const [lab, setLab] = useState("BIS");

  return (
    <div className="card-body">
      <div className="card-container">
        <div className="tabs">
          <div className={`tab-toggle ${lab == "BIS" && "active"}`}>
            <h3 onClick={() => setLab("BIS")}>
              <img
                width={17}
                height={17}
                src="./assets/slider_info_icons/BisHallmark.svg"
                alt=""
              />
              BIS Hallmark
            </h3>
          </div>
          <div className={`tab-toggle ${lab == "IGI" && "active"}`}>
            <h3 onClick={() => setLab("IGI")}>
              <img
                width={20}
                height={20}
                src="./assets/slider_info_icons/igi.svg"
                alt=""
              />
              IGI
            </h3>
          </div>
          <div className={`tab-toggle ${lab == "SGL" && "active"}`}>
            <h3 onClick={() => setLab("SGL")}>
              <img
                width={20}
                height={20}
                src="./assets/slider_info_icons/sgl.svg"
                alt=""
              />
              SGL
            </h3>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div className="card-container">
          {lab == "BIS" && (
            <div className="inner-content">
              Hallmark Unique Identification (HUID) is a revolutionary system
              designed to provide unparalleled authenticity and traceability for
              products. Each item is assigned a unique identifier, encoded with
              encrypted data and embedded within the hallmark. This identifier
              serves as a digital fingerprint, allowing for seamless
              verification of authenticity and origin throughout the supply
              chain and beyond.
            </div>
          )}
          {lab == "IGI" && (
            <div className="inner-content">
              IGI (International Gemological Institute): IGI is a renowned
              gemological laboratory that provides expert grading and
              certification services for diamonds, gemstones, and jewelry. With
              a global presence and decades of experience, IGI offers accurate
              and reliable assessments of gemstone quality, helping consumers
              make informed purchasing decisions.
            </div>
          )}
          {lab == "SGL" && (
            <div className="inner-content">
              SGL (Solitaire Gem Labs): SGL is a trusted gemological laboratory
              specializing in the certification of diamonds and gemstones. With
              state-of-the-art technology and a team of expert gemologists, SGL
              provides comprehensive grading reports that authenticate the
              quality and characteristics of each stone, ensuring transparency
              and confidence in the jewelry market.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
