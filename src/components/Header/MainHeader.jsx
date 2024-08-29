import { useContext, useState } from "react";
import "./MainHeader.css";
import { Hamburger } from "./Hamburger";
import { Context } from "../../context/Context";

export const MainHeader = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const { wishlist } = useContext(Context);

  return (
    <>
      {/* Dekstop header */}
      <header className="dekstop">
        <div className="header-content container">
          <div className="logo">
            <a href="/">
              <img
                width={200}
                height={40}
                src="./assets/brand_logo.svg"
                style={{ color: "transparent" }}
              />
            </a>
          </div>

          <div className="search-box">
            <div className="search-box-inner">
              <img src="./assets/header_icons/searchIcon1.svg" alt="" />
              <input type="text" placeholder="Search Products..." />
            </div>
          </div>

          <div className="multiple-icons">
            <div role="button" className="header-static gsp">
              <img
                height={26}
                width={26}
                src="./assets/header_icons/gsp.svg"
                alt=""
              />
              <span className="icon-text">GSP</span>
            </div>
            <div role="button" className="header-static wishlist">
              <div style={{ position: "relative" }}>
                <img
                  height={26}
                  width={26}
                  src="./assets/header_icons/wishlist-svg.svg"
                  alt=""
                />
                {wishlist && <div className="cartBadge">1</div>}
              </div>
              <span className="icon-text">WISHLIST</span>
            </div>
            <div role="button" className="header-static cart">
              <img
                height={26}
                width={26}
                src="./assets/header_icons/mini-cart.svg"
                alt=""
              />
              <span className="icon-text">CART</span>
            </div>
            <div role="button" className="header-static verify-report">
              <img
                height={26}
                width={26}
                src="./assets/header_icons/qr.svg"
                alt=""
              />
              <span className="icon-text">VERIFY REPORT</span>
            </div>
          </div>
          <div className="login">
            <a href="/">
              <div className="login-div">
                <img
                  height={40}
                  width={40}
                  src="./assets/header_icons/profile.svg"
                  alt=""
                />
                <span>Sign In</span>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="mobile">
        <div className="header-content container mobile-header">
          <div className="navigation">
            <img
              onClick={() => setShowHamburger(true)}
              width={20}
              height={15.5}
              src="./assets/header_icons/navbar.svg"
              alt=""
            />
            {showHamburger ? (
              <Hamburger
                setShowHamburger={setShowHamburger}
                showHamburger={showHamburger}
              />
            ) : null}
          </div>
          <div className="logo">
            <img
              height={40}
              width={200}
              src="./assets/header_icons/logo.webp"
              style={{ color: "transparent" }}
              alt=""
            />
          </div>
          <div className="mobile-search">
            <a href="">
              <img
                height={16}
                width={16}
                src="./assets/header_icons/searchIcon1.svg"
                alt=""
              />
            </a>
            <div className="mobile-wishlist" style={{ position: "relative" }}>
              <a href="">
                <img
                  height={16}
                  width={16}
                  src="./assets/header_icons/heart.svg"
                  alt=""
                />
                {wishlist && <span className="count">1</span>}
              </a>
            </div>
            <a href="">
              <img
                height={16}
                width={16}
                src="./assets/header_icons/cart.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
