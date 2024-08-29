import { useState } from "react";
import "./Hamburger.css";
export const Hamburger = ({ setShowHamburger, showHamburger }) => {
  const [arrivals, setArrivals] = useState(false);
  const [ring, setRing] = useState(false);
  const [earring, setEaring] = useState(false);
  const [pendent, setPendent] = useState(false);
  const [bracelete, SetBracelete] = useState(false);
  const [alljewellery, setAlljwellery] = useState(false);

  const handleSlideOut = () => {
    document.querySelector(".hamburger-menu").classList.add("slide-out");
    setTimeout(() => {
      setShowHamburger(false);
    }, 295);
  };

  return (
    <div className="hamburger-menu">
      <div className="menu-logo">
        <img
          onClick={handleSlideOut}
          src="./assets/header_icons/prevArrow.svg"
          alt=""
        />
        <div className="logo">
          <img src="./assets/header_icons/logo.webp" alt="" />
        </div>
        <img src="./assets/header_icons/mini-cart.svg" alt="" />
      </div>

      <div className="navigation-menu">
        <div className="menu-items">
          <div className="menu-level">
            <div className="menu-item user active">
              <a href="">
                <span>
                  <img
                    height={20}
                    width={20}
                    src="./assets/hamburger_icons/user.png"
                    alt=""
                    style={{ color: "transparent" }}
                  />
                  LOGIN / SIGN UP
                </span>
              </a>
            </div>
          </div>
          <div
            onClick={() => {
              setArrivals((prev) => !prev);
              setRing(false);
              setEaring(false);
              setPendent(false);
              SetBracelete(false);
              setAlljwellery(false);
            }}
            className="menu-level"
          >
            <div className={`menu-item ${arrivals && "active"}`}>
              <a>
                <span>
                  <img
                    height={20}
                    width={20}
                    src="./assets/hamburger_icons/newarrivals.svg"
                    alt=""
                    style={{ color: "transparent" }}
                  />
                  NEW ARRIVALS
                </span>
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "rgb(1, 36, 51)",
                  }}
                >
                  {!arrivals ? "+" : "-"}
                </span>
              </a>
            </div>
          </div>
          {arrivals && (
            <div className="sub-menu">
              <div className="inner-items">
                <p className="inner-head">SHOP BY ASTHETICS</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      ENGAGEMENT
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      DAILY WEAR
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      BANDS
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      FLORAL
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      HEARTTHROB
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      CHAINED
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      HELICAL AND WAVY
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      ADJUSTABLE
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY COST</p>
                <ul className="inner-data">
                  <li>Under ₹ 10k</li>
                  <li>₹ 10k to ₹ 20k</li>
                  <li>₹ 20k to ₹ 30k</li>
                  <li>Above ₹ 30k</li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY GOLD WEIGHT</p>
                <ul className="inner-data">
                  <li>1-2 Gm</li>
                  <li>2-5 gm</li>
                  <li>5-10 gm</li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY ASTHETICS</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/woman-avatar.svg"
                        alt=""
                      />
                      WOMEN
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/male-user.svg"
                        alt=""
                      />
                      MEN
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY METAL COLOR</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/Yellow.webp"
                        alt=""
                      />
                      YELLOW GOLD
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/WhiteGold.webp"
                        alt=""
                      />
                      WHITE GOLD
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/Rosegold.webp"
                        alt=""
                      />
                      ROSE GOLD
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">COLLECTIONS</p>
                <ul className="inner-data">
                  <img
                    width={200}
                    height={50}
                    src="./assets/bottom_header_icons/new2001.webp"
                    alt=""
                  />
                </ul>
              </div>
            </div>
          )}
          <div
            onClick={() => {
              setArrivals(false);
              setRing((prev) => !prev);
              setEaring(false);
              setPendent(false);
              SetBracelete(false);
              setAlljwellery(false);
            }}
            className="menu-level"
          >
            <div className={`menu-item ${ring && "active"}`}>
              <a>
                <span>
                  <img
                    height={20}
                    width={20}
                    src="./assets/hamburger_icons/rings.svg"
                    alt=""
                    style={{ color: "transparent" }}
                  />
                  RINGS
                </span>
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "rgb(1, 36, 51)",
                  }}
                >
                  {!ring ? "+" : "-"}
                </span>
              </a>
            </div>
          </div>
          {ring && (
            <div className="sub-menu">
              <div className="inner-items">
                <p className="inner-head">SHOP BY ASTHETICS</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      ENGAGEMENT
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      DAILY WEAR
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      BANDS
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      FLORAL
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      HEARTTHROB
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      CHAINED
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      HELICAL AND WAVY
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      ADJUSTABLE
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY COST</p>
                <ul className="inner-data">
                  <li>Under ₹ 10k</li>
                  <li>₹ 10k to ₹ 20k</li>
                  <li>₹ 20k to ₹ 30k</li>
                  <li>Above ₹ 30k</li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY GOLD WEIGHT</p>
                <ul className="inner-data">
                  <li>1-2 Gm</li>
                  <li>2-5 gm</li>
                  <li>5-10 gm</li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY ASTHETICS</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/woman-avatar.svg"
                        alt=""
                      />
                      WOMEN
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/male-user.svg"
                        alt=""
                      />
                      MEN
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY METAL COLOR</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/Yellow.webp"
                        alt=""
                      />
                      YELLOW GOLD
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/WhiteGold.webp"
                        alt=""
                      />
                      WHITE GOLD
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/Rosegold.webp"
                        alt=""
                      />
                      ROSE GOLD
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">COLLECTIONS</p>
                <ul className="inner-data">
                  <img
                    width={200}
                    height={50}
                    src="./assets/bottom_header_icons/new2001.webp"
                    alt=""
                  />
                </ul>
              </div>
            </div>
          )}
          <div
            onClick={() => {
              setArrivals(false);
              setRing(false);
              setEaring((prev) => !prev);
              setPendent(false);
              SetBracelete(false);
              setAlljwellery(false);
            }}
            className="menu-level"
          >
            <div className={`menu-item ${earring && "active"}`}>
              <a>
                <span>
                  <img
                    height={20}
                    width={20}
                    src="./assets/hamburger_icons/earings.svg"
                    alt=""
                    style={{ color: "transparent" }}
                  />
                  EARRINGS
                </span>
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "rgb(1, 36, 51)",
                  }}
                >
                  {!earring ? "+" : "-"}
                </span>
              </a>
            </div>
          </div>
          {earring && (
            <div className="sub-menu">
              <div className="inner-items">
                <p className="inner-head">SHOP BY ASTHETICS</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      ENGAGEMENT
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      DAILY WEAR
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      BANDS
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      FLORAL
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      HEARTTHROB
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      CHAINED
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      HELICAL AND WAVY
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      ADJUSTABLE
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY COST</p>
                <ul className="inner-data">
                  <li>Under ₹ 10k</li>
                  <li>₹ 10k to ₹ 20k</li>
                  <li>₹ 20k to ₹ 30k</li>
                  <li>Above ₹ 30k</li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY GOLD WEIGHT</p>
                <ul className="inner-data">
                  <li>1-2 Gm</li>
                  <li>2-5 gm</li>
                  <li>5-10 gm</li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY ASTHETICS</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/woman-avatar.svg"
                        alt=""
                      />
                      WOMEN
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/male-user.svg"
                        alt=""
                      />
                      MEN
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY METAL COLOR</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/Yellow.webp"
                        alt=""
                      />
                      YELLOW GOLD
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/WhiteGold.webp"
                        alt=""
                      />
                      WHITE GOLD
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/Rosegold.webp"
                        alt=""
                      />
                      ROSE GOLD
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">COLLECTIONS</p>
                <ul className="inner-data">
                  <img
                    width={200}
                    height={50}
                    src="./assets/bottom_header_icons/new2001.webp"
                    alt=""
                  />
                </ul>
              </div>
            </div>
          )}
          <div
            onClick={() => {
              setArrivals(false);
              setRing(false);
              setEaring(false);
              setPendent((prev) => !prev);
              SetBracelete(false);
              setAlljwellery(false);
            }}
            className="menu-level"
          >
            <div className={`menu-item ${pendent && "active"}`}>
              <a>
                <span>
                  <img
                    height={20}
                    width={20}
                    src="./assets/hamburger_icons/pendent.svg"
                    alt=""
                    style={{ color: "transparent" }}
                  />
                  PENDENTS
                </span>
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "rgb(1, 36, 51)",
                  }}
                >
                  {!pendent ? "+" : "-"}
                </span>
              </a>
            </div>
          </div>
          {pendent && (
            <div className="sub-menu">
              <div className="inner-items">
                <p className="inner-head">SHOP BY ASTHETICS</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      ENGAGEMENT
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      DAILY WEAR
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      BANDS
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      FLORAL
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      HEARTTHROB
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      CHAINED
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      HELICAL AND WAVY
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      ADJUSTABLE
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY COST</p>
                <ul className="inner-data">
                  <li>Under ₹ 10k</li>
                  <li>₹ 10k to ₹ 20k</li>
                  <li>₹ 20k to ₹ 30k</li>
                  <li>Above ₹ 30k</li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY GOLD WEIGHT</p>
                <ul className="inner-data">
                  <li>1-2 Gm</li>
                  <li>2-5 gm</li>
                  <li>5-10 gm</li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY ASTHETICS</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/woman-avatar.svg"
                        alt=""
                      />
                      WOMEN
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/male-user.svg"
                        alt=""
                      />
                      MEN
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY METAL COLOR</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/Yellow.webp"
                        alt=""
                      />
                      YELLOW GOLD
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/WhiteGold.webp"
                        alt=""
                      />
                      WHITE GOLD
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/Rosegold.webp"
                        alt=""
                      />
                      ROSE GOLD
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">COLLECTIONS</p>
                <ul className="inner-data">
                  <img
                    width={200}
                    height={50}
                    src="./assets/bottom_header_icons/new2001.webp"
                    alt=""
                  />
                </ul>
              </div>
            </div>
          )}
          <div
            onClick={() => {
              setArrivals(false);
              setRing(false);
              setEaring(false);
              setPendent(false);
              SetBracelete((prev) => !prev);
              setAlljwellery(false);
            }}
            className="menu-level"
          >
            <div className={`menu-item ${bracelete && "active"}`}>
              <a>
                <span>
                  <img
                    height={20}
                    width={20}
                    src="./assets/hamburger_icons/bracelets.svg"
                    alt=""
                    style={{ color: "transparent" }}
                  />
                  BRACELETS & BANGLES
                </span>
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "rgb(1, 36, 51)",
                  }}
                >
                  {!bracelete ? "+" : "-"}
                </span>
              </a>
            </div>
          </div>
          {bracelete && (
            <div className="sub-menu">
              <div className="inner-items">
                <p className="inner-head">SHOP BY ASTHETICS</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      ENGAGEMENT
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      DAILY WEAR
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      BANDS
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      FLORAL
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      HEARTTHROB
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      CHAINED
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      HELICAL AND WAVY
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      ADJUSTABLE
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY COST</p>
                <ul className="inner-data">
                  <li>Under ₹ 10k</li>
                  <li>₹ 10k to ₹ 20k</li>
                  <li>₹ 20k to ₹ 30k</li>
                  <li>Above ₹ 30k</li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY GOLD WEIGHT</p>
                <ul className="inner-data">
                  <li>1-2 Gm</li>
                  <li>2-5 gm</li>
                  <li>5-10 gm</li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY ASTHETICS</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/woman-avatar.svg"
                        alt=""
                      />
                      WOMEN
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/male-user.svg"
                        alt=""
                      />
                      MEN
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY METAL COLOR</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/Yellow.webp"
                        alt=""
                      />
                      YELLOW GOLD
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/WhiteGold.webp"
                        alt=""
                      />
                      WHITE GOLD
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/Rosegold.webp"
                        alt=""
                      />
                      ROSE GOLD
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">COLLECTIONS</p>
                <ul className="inner-data">
                  <img
                    width={200}
                    height={50}
                    src="./assets/bottom_header_icons/new2001.webp"
                    alt=""
                  />
                </ul>
              </div>
            </div>
          )}
          <div className="menu-level">
            <div className="menu-item ">
              <a href="">
                <span>
                  <img
                    height={20}
                    width={20}
                    src="./assets/hamburger_icons/goldcoin.svg"
                    alt=""
                    style={{ color: "transparent" }}
                  />
                  GOLD COINS
                </span>
              </a>
            </div>
          </div>
          <div
            onClick={() => {
              setArrivals(false);
              setRing(false);
              setEaring(false);
              setPendent(false);
              SetBracelete(false);
              setAlljwellery((prev) => !prev);
            }}
            className="menu-level"
          >
            <div className={`menu-item ${alljewellery && "active"}`}>
              <a>
                <span>
                  <img
                    height={20}
                    width={20}
                    src="./assets/hamburger_icons/alljewellery.svg"
                    alt=""
                    style={{ color: "transparent" }}
                  />
                  ALL JEWELLERY
                </span>
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "rgb(1, 36, 51)",
                  }}
                >
                  {!alljewellery ? "+" : "-"}
                </span>
              </a>
            </div>
          </div>
          {alljewellery && (
            <div className="sub-menu">
              <div className="inner-items">
                <p className="inner-head">SHOP BY ASTHETICS</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      ENGAGEMENT
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      DAILY WEAR
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      BANDS
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      FLORAL
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      HEARTTHROB
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      CHAINED
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      HELICAL AND WAVY
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        width={80}
                        height={80}
                        src="./assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                        alt=""
                      />
                      ADJUSTABLE
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY COST</p>
                <ul className="inner-data">
                  <li>Under ₹ 10k</li>
                  <li>₹ 10k to ₹ 20k</li>
                  <li>₹ 20k to ₹ 30k</li>
                  <li>Above ₹ 30k</li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY GOLD WEIGHT</p>
                <ul className="inner-data">
                  <li>1-2 Gm</li>
                  <li>2-5 gm</li>
                  <li>5-10 gm</li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY ASTHETICS</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/woman-avatar.svg"
                        alt=""
                      />
                      WOMEN
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/male-user.svg"
                        alt=""
                      />
                      MEN
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">SHOP BY METAL COLOR</p>
                <ul className="inner-data">
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/Yellow.webp"
                        alt=""
                      />
                      YELLOW GOLD
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/WhiteGold.webp"
                        alt=""
                      />
                      WHITE GOLD
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="user"
                        width={13}
                        height={15}
                        src="./assets/bottom_header_icons/Rosegold.webp"
                        alt=""
                      />
                      ROSE GOLD
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-items">
                <p className="inner-head">COLLECTIONS</p>
                <ul className="inner-data">
                  <img
                    width={200}
                    height={50}
                    src="./assets/bottom_header_icons/new2001.webp"
                    alt=""
                  />
                </ul>
              </div>
            </div>
          )}
          <ul style={{ padding: "11px 0px" }}>
            <div className="menu-level">
              <div className="fade">
                <a href="">
                  <span>
                    <img
                      height={20}
                      width={20}
                      src="./assets/hamburger_icons/gsp.svg"
                      alt=""
                      style={{ color: "transparent" }}
                    />
                    GOLD SECURE POOL
                  </span>
                </a>
              </div>
            </div>
            <div className="menu-level">
              <div className="fade">
                <a href="">
                  <span>
                    <img
                      height={20}
                      width={20}
                      src="./assets/hamburger_icons/wishlist.svg"
                      alt=""
                      style={{ color: "transparent" }}
                    />
                    WISHLIST
                  </span>
                </a>
              </div>
            </div>
            <div className="menu-level">
              <div className="fade">
                <a href="">
                  <span>
                    <img
                      height={20}
                      width={20}
                      src="./assets/hamburger_icons/cart.svg"
                      alt=""
                      style={{ color: "transparent" }}
                    />
                    CART
                  </span>
                </a>
              </div>
            </div>
          </ul>
        </div>

        <div className="bottom-content">
          <div className="contact">
            <a href="">
              <img
                height={36}
                width={36}
                src="./assets/hamburger_icons/whatsapp.svg"
                alt=""
              />
            </a>
            <a href="">
              <img
                height={36}
                width={36}
                src="./assets/hamburger_icons/phone.svg"
                alt=""
              />
            </a>
          </div>
          <div className="signup">
            <button>LOGIN / SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
};
