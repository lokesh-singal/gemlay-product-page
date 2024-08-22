import { useContext, useState } from "react";
import "./MainSlider.css";
import { IoIosHeart } from "react-icons/io";
import { Context } from "../../context/Context";

export const MainSlider = () => {
  const [karat, setKarat] = useState("18K");
  const [gold, setGold] = useState("Yellow Gold");
  const [size, setSize] = useState("2-2/16");
  const [quality, SetQuality] = useState("IJ-SI");
  const { wishlist, setWishlist, pincode, SetPincode } = useContext(Context);

  return (
    <div className="slider-container">
      <div className="product-slider-outer">
        <div className="product-slider"></div>
        <div className="zoom">PRODUCT SHOWN IN 10X ZOOM FOR YOUR CLARITY</div>
      </div>
      <div className="product-slider-info">
        <div className="info-head">
          <p className="product-name">The Squares Diamond Bracelet</p>
          <div className="wishlist-share">
            <div className="wishlist">
              <IoIosHeart
                className={`${wishlist && "red"}`}
                onClick={() => {
                  setWishlist((prev) => !prev);
                }}
                role="button"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <div className="share">
              <img
                role="button"
                width={30}
                height={30}
                src="./src/assets/slider_info_icons/compare.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="info-price">
          <span className="product-price">₹86,243</span>
          <span className="price-info">MRP (Inclusive all Taxes)</span>
        </div>

        <div className="info-options">
          <div className="karat-filter">
            <p className="label">
              <strong>Karat : </strong>
              <span>{karat}</span>
            </p>
            <ul className="list-items karat">
              <li
                onClick={() => setKarat("14K")}
                className={`item ${karat == "14K" && "active"}`}
              >
                14K
              </li>
              <li
                onClick={() => setKarat("18K")}
                className={`item ${karat == "18K" && "active"}`}
              >
                18K
              </li>
            </ul>
          </div>
          <div className="metal-filter">
            <p className="label">
              <strong>Metal : </strong>
              <span>{gold}</span>
            </p>
            <ul className="list-items metal">
              <li
                onClick={() => setGold("Yellow Gold")}
                className="item yellow"
              ></li>
              <li
                onClick={() => setGold("White Gold")}
                className="item silver"
              ></li>
              <li
                onClick={() => setGold("Rose Gold")}
                className="item red"
              ></li>
            </ul>
          </div>
          <div className="origin-filter">
            <p className="label">
              <strong>Diamond Origin : </strong>
              <span>Natural</span>
            </p>
            <ul className="list-items ">
              <li className="item active">Natural</li>
            </ul>
          </div>
          <div className="size-filter">
            <p className="label">
              <strong>Size : </strong>
              <span>{size}</span>
            </p>
            <ul>
              <select value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="2-2/16">2-2/16 (0)</option>
                <option value="2-4/16">2-4/16 (1.44)</option>
                <option value="2-6/16">2-6/16 (2.89)</option>
                <option value="2-8/16">2-8/16 (4.33)</option>
              </select>
              <p className="ring-size">Not Sure about Ring Size ?</p>
            </ul>
          </div>
          <div className="karat-filter">
            <p className="label">
              <strong>Diamond Quality : </strong>
              <span>{quality}</span>
            </p>
            <ul className="list-items">
              <li
                onClick={() => SetQuality("IJ-SI")}
                className={`item ${quality == "IJ-SI" && "active"}`}
              >
                IJ-SI
              </li>
              <li
                onClick={() => SetQuality("GH-VS/SI")}
                className={`item ${quality == "GH-VS/SI" && "active"}`}
              >
                GH-VS/SI
              </li>
              <li
                onClick={() => SetQuality("GH-VVS")}
                className={`item ${quality == "GH-VVS" && "active"}`}
              >
                GH-VVS
              </li>
              <li
                onClick={() => SetQuality("EF-VVS")}
                className={`item ${quality == "EF-VVS" && "active"}`}
              >
                EF-VVS
              </li>
            </ul>
          </div>
          <div className="pincode-filter">
            <p className="label">
              <strong>Delivery & Store Details</strong>
            </p>
            <div className="location">
              <ul className="list-items ">
                <input
                  type="numeric"
                  maxLength="6"
                  className="pincode"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={(e) => SetPincode(e.target.value)}
                ></input>
                <img
                  width={25}
                  height={25}
                  src="./src/assets/slider_info_icons/locate-me.svg"
                  alt=""
                />
              </ul>
              <p className="locate-me" role="button">
                Locate Me
              </p>
            </div>
          </div>
        </div>

        <div className="info-buttons">
          <button
            onClick={() => {
              setWishlist((prev) => !prev);
            }}
            className="wishlist"
          >
            {!wishlist ? "ADD TO WISHLIST" : "REMOVE FROM WISHLIST"}
          </button>
          <button className="available">Checking Availability</button>
        </div>

        <div className="fixed-buttons">
          <div className="add-to-cart">
            <div className="icon-border">
              <IoIosHeart
                className={`${wishlist && "red"}`}
                onClick={() => {
                  setWishlist((prev) => !prev);
                }}
                role="button"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <div className="add-to-cart-btn">
              <button>
                <img
                  src="./src/assets/slider_info_icons/addtocart.svg"
                  alt=""
                />
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
