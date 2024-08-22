import { IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";
import "./Footer.css";

export const MobileFooter = () => {
  const [service, setService] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [jwell, setJwell] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className="mobile-only">
      <div className="footer-content">
        <div
          onClick={() => {
            setService((prev) => !prev);
            setPolicy(false);
            setJwell(false);
            setAbout(false);
            setContact(false);
          }}
          className="collapse"
        >
          <h3>OUR SERVICES</h3>
          <IoMdArrowDropright
            className={`icon ${service && "rotate"}`}
            style={{ fontSize: "18px" }}
          />
        </div>
        {service && (
          <ul className="footer-categories">
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={22}
                  src="./assets/footer_icons/gold-rate.svg"
                  alt=""
                />
              </div>
              <a href="">GOLD RATE</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={22}
                  src="./assets/footer_icons/payment-method.svg"
                  alt=""
                />
              </div>
              <a href="">VARIOUS PAYMENT OPTIONS</a>
            </li>
          </ul>
        )}

        <div
          onClick={() => {
            setService(false);
            setPolicy((prev) => !prev);
            setJwell(false);
            setAbout(false);
            setContact(false);
          }}
          className="collapse"
        >
          <h3>OUR POLICIES</h3>
          <IoMdArrowDropright
            className={`icon ${policy && "rotate"}`}
            style={{ fontSize: "18px" }}
          />
        </div>
        {policy && (
          <ul className="footer-categories">
            <li>
              <div className="thumb">
                <img
                  width={20}
                  height={23}
                  src="./assets/footer_icons/return.svg"
                  alt=""
                />
              </div>
              <a href="">30-DAY RETURNS</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={25}
                  src="./assets/footer_icons/shipping.svg"
                  alt=""
                />
              </div>
              <a href="">FREE SHIPPING</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={22}
                  height={22}
                  src="./assets/footer_icons/exchange.svg"
                  alt=""
                />
              </div>
              <a href="">LIFETIME EXCHANGE POLICY</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={23}
                  src="./assets/footer_icons/refund.svg"
                  alt=""
                />
              </div>
              <a href="">RETURN AND REFUND POLICY</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={22}
                  height={25}
                  src="./assets/footer_icons/gspLogo.svg"
                  alt=""
                />
              </div>
              <a href="">GSP TERMS & CONDITIONS</a>
            </li>
          </ul>
        )}
        <div
          onClick={() => {
            setService(false);
            setPolicy(false);
            setJwell((prev) => !prev);
            setAbout(false);
            setContact(false);
          }}
          className="collapse"
        >
          <h3>JEWELLERY KNOWLEDGE</h3>
          <IoMdArrowDropright
            className={`icon ${jwell && "rotate"}`}
            style={{ fontSize: "18px" }}
          />
        </div>
        {jwell && (
          <ul className="footer-categories">
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={23}
                  src="./assets/footer_icons/gold.svg"
                  alt=""
                />
              </div>
              <a href="">GOLD GUIDE</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={23}
                  src="./assets/footer_icons/diamond.svg"
                  alt=""
                />
              </div>
              <a href="">DIAMOND GUIDE</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={23}
                  src="./assets/footer_icons/JEWELLERY.svg"
                  alt=""
                />
              </div>
              <a href="">JEWELLERY GUIDE</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={23}
                  src="./assets/footer_icons/SOLITIARE-DIAMOND.svg"
                  alt=""
                />
              </div>
              <a href="">SOLITAIRE DIAMOND GUIDE</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={23}
                  src="./assets/footer_icons/GEMSTONE.svg"
                  alt=""
                />
              </div>
              <a href="">GEMSTONE GUIDE</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={23}
                  src="./assets/footer_icons/CERTIFICATION.svg"
                  alt=""
                />
              </div>
              <a href="">CERTIFICATION GUIDE</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={23}
                  src="./assets/footer_icons/JEWELLERY1.svg"
                  alt=""
                />
              </div>
              <a href="">JEWELLERY GIFTING</a>
            </li>
          </ul>
        )}
        <div
          onClick={() => {
            setService(false);
            setPolicy(false);
            setJwell(false);
            setAbout((prev) => !prev);
            setContact(false);
          }}
          className="collapse"
        >
          <h3>ABOUT US</h3>
          <IoMdArrowDropright
            className={`icon ${about && "rotate"}`}
            style={{ fontSize: "18px" }}
          />
        </div>
        {about && (
          <ul className="footer-categories">
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={23}
                  src="./assets/footer_icons/vision.svg"
                  alt=""
                />
              </div>
              <a href="">OUR VISION</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={23}
                  src="./assets/footer_icons/garnet.svg"
                  alt=""
                />
              </div>
              <a href="">WHY GEMLAY ?</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={23}
                  src="./assets/footer_icons/story.svg"
                  alt=""
                />
              </div>
              <a href="">OUR STORY</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={23}
                  src="./assets/footer_icons/team.svg"
                  alt=""
                />
              </div>
              <a href="">OUR TEAM</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={25}
                  height={23}
                  src="./assets/footer_icons/review.svg"
                  alt=""
                />
              </div>
              <a href="">REVIEWS AND RATINGS</a>
            </li>
            <li>
              <div className="thumb">
                <img
                  width={12}
                  height={12}
                  src="./assets/footer_icons/press.svg"
                  alt=""
                />
              </div>
              <a href="">PRESS RELEASE</a>
            </li>
          </ul>
        )}
        <div
          onClick={() => {
            setService(false);
            setPolicy(false);
            setJwell(false);
            setAbout(false);
            setContact((prev) => !prev);
          }}
          className="collapse"
        >
          <h3>Get In Touch</h3>
          <IoMdArrowDropright
            className={`icon ${contact && "rotate"}`}
            style={{ fontSize: "18px" }}
          />
        </div>
        {contact && (
          <>
            <ul className="footer-categories in-touch">
              <li>
                <div className="thumb">
                  <img
                    width={25}
                    height={22}
                    src="./assets/footer_icons/whatsapp.svg"
                    alt=""
                  />
                </div>
                <a href="">99888-98866</a>
              </li>
              <li>
                <div className="thumb">
                  <img
                    width={25}
                    height={22}
                    src="./assets/footer_icons/email.svg"
                    alt=""
                  />
                </div>
                <a href="">info@gemlay.com</a>
              </li>
              <li>
                <div className="thumb special">
                  <img
                    width={30}
                    height={30}
                    src="./assets/footer_icons/navigation.svg"
                    alt=""
                  />
                </div>
                <a href="">
                  Sco 15, Ground Floor, Jubilee Junction, Sector 66, Main Mohali
                  Airport Road.
                </a>
              </li>
            </ul>
            <ul className="social-media">
              <li>
                <img
                  width={30}
                  height={30}
                  role="button"
                  src="./assets/footer_icons/fb.svg"
                  alt=""
                />
                <img
                  width={30}
                  height={30}
                  role="button"
                  src="./assets/footer_icons/insta.svg"
                  alt=""
                />
                <img
                  width={30}
                  height={30}
                  role="button"
                  src="./assets/footer_icons/youtube.svg"
                  alt=""
                />
              </li>
            </ul>
          </>
        )}
      </div>

      <ul className="app">
        Download Our Application
        <li>
          <img src="./assets/footer_icons/google-play.png" alt="" />
          <img src="./assets/footer_icons/apple-pay.png" alt="" />
        </li>
      </ul>
    </div>
  );
};
