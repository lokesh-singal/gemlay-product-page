import "./Footer.css";
import { IoMdArrowDropright } from "react-icons/io";
import { MobileFooter } from "./MobileFooter";
import { DekstopFooter } from "./DekstopFooter";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-head">
        <div className="discover">
          <a href="">DISCOVER ALL</a>
          <IoMdArrowDropright style={{ fontSize: "20px" }} />
        </div>
      </div>
      <div className="footer-content">
        <DekstopFooter />
        <MobileFooter />
        <div className="footer-bottom">Copyright © Gemlay 2024</div>
      </div>
    </div>
  );
};
