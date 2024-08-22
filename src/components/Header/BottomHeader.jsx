import { useState } from "react";
import "./BottomHeader.css";
import { Dropdown } from "./Dropdown";

export const BottomHeader = () => {
  const [dropDisplay, setDropDisplay] = useState(false);

  const names = [
    "NEW ARRIVALS",
    "RINGS",
    "EARRINGS",
    "PENDANTS",
    "BRACELETS & BANGLES",
    "GOLD COINS",
    "ALL JEWELLERY",
  ];

  return (
    <div className="bottom-header">
      <div className="menu-items container">
        {names.map((item, index) => (
          <Dropdown setDropDisplay={setDropDisplay} key={index} name={item} />
        ))}
        {/* <div className="menu-level">
          <div className="menu-item">
            <a href="/">NEW ARRIVALS</a>
          </div>
        </div>
        <div className="menu-level">
          <div className="menu-item">
            <a href="">RINGS</a>
          </div>
        </div>
        <div className="menu-level">
          <div className="menu-item">
            <a href="">EARRINGS</a>
          </div>
        </div>
        <div className="menu-level">
          <div className="menu-item">
            <a href="">PENDANTS</a>
          </div>
        </div>
        <div className="menu-level">
          <div className="menu-item">
            <a href="">BRACELETS & BANGLES</a>
          </div>
        </div>
        <div className="menu-level">
          <div className="menu-item">
            <a href="">GOLD COINS</a>
          </div>
        </div>
        <div className="menu-level">
          <div className="menu-item">
            <a href="">ALL JEWELLERY</a>
          </div>
        </div> */}
      </div>

      <div
        onMouseEnter={() => setDropDisplay(true)}
        onMouseLeave={() => setDropDisplay(false)}
        className="dropdown-container"
        style={
          dropDisplay
            ? { display: "block", position: "absolute", zIndex: "1" }
            : { display: "none" }
        }
      >
        <div className="dropdown">
          <div className="aesthetic">
            <p className="drop-head">SHOP BY ASTHETICS</p>
            <div className="aesthetic-grid">
              <div className="aesthetic-grid-inner">
                <img
                  height={80}
                  width={80}
                  src="./src/assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                  alt=""
                />
                <p>ENGAGEMENT</p>
              </div>
              <div className="aesthetic-grid-inner">
                <img
                  height={80}
                  width={80}
                  src="./src/assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                  alt=""
                />
                <p>DAILY WEAR</p>
              </div>
              <div className="aesthetic-grid-inner">
                <img
                  height={80}
                  width={80}
                  src="./src/assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                  alt=""
                />
                <p>BANDS</p>
              </div>
              <div className="aesthetic-grid-inner">
                <img
                  height={80}
                  width={80}
                  src="./src/assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                  alt=""
                />
                <p>FLORAL</p>
              </div>
              <div className="aesthetic-grid-inner">
                <img
                  height={80}
                  width={80}
                  src="./src/assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                  alt=""
                />
                <p>HEARTTHROB</p>
              </div>
              <div className="aesthetic-grid-inner">
                <img
                  height={80}
                  width={80}
                  src="./src/assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                  alt=""
                />
                <p>CHAINED</p>
              </div>
              <div className="aesthetic-grid-inner">
                <img
                  height={80}
                  width={80}
                  src="./src/assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                  alt=""
                />
                <p>HELICAL AND WAVY</p>
              </div>
              <div className="aesthetic-grid-inner">
                <img
                  height={80}
                  width={80}
                  src="./src/assets/bottom_header_icons/Criss-Cross20Ring_YE.webp"
                  alt=""
                />
                <p>ADJUSTABLE</p>
              </div>
            </div>
          </div>
          <div className="cost">
            <p className="drop-head">SHOP BY COST</p>
            <ul>
              <li>Under ₹ 10k</li>
              <li>₹ 10k to ₹ 20k</li>
              <li>₹ 20k to ₹ 30k</li>
              <li>₹ 30k to ₹ 50k</li>
              <li>Above ₹ 50k</li>
            </ul>
            <p className="drop-head"> SHOP BY GOLD WEIGHT</p>
            <ul>
              <li>1-2 Gm</li>
              <li>2-5 gm</li>
              <li>5-10 gm</li>
            </ul>
          </div>
          <div className="gender">
            <p className="drop-head">SHOP BY GENDER</p>
            <ul>
              <li>
                <img
                  height={15}
                  width={15}
                  src="./src/assets/bottom_header_icons/woman-avatar.svg"
                  alt=""
                />{" "}
                Women
              </li>
              <li>
                <img
                  height={15}
                  width={15}
                  src="./src/assets/bottom_header_icons/male-user.svg"
                  alt=""
                />{" "}
                Men
              </li>
            </ul>
            <p className="drop-head">SHOP BY METAL COLOR</p>
            <ul>
              <li>
                <img
                  height={13}
                  width={13}
                  src="./src/assets/bottom_header_icons/Yellow.webp"
                  alt=""
                />{" "}
                Yellow Gold
              </li>
              <li>
                <img
                  height={13}
                  width={13}
                  src="./src/assets/bottom_header_icons/WhiteGold.webp"
                  alt=""
                />{" "}
                White Gold
              </li>
              <li>
                <img
                  height={13}
                  width={13}
                  src="./src/assets/bottom_header_icons/Rosegold.webp"
                  alt=""
                />{" "}
                Rose Gold
              </li>
            </ul>
          </div>
          <div className="collection">
            <p className="drop-head">COLLECTIONS</p>
            <img
              src="./src/assets/bottom_header_icons/new2001.webp"
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
