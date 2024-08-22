import "./ProductDetails.css";

export const ProductDetails = () => {
  return (
    <div className="detail-container">
      <div className="detail-wrapper">
        <h3>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H14V12.375C14 12.806 13.8288 13.2193 13.524 13.524C13.2193 13.8288 12.806 14 12.375 14H2.625C2.19402 14 1.7807 13.8288 1.47595 13.524C1.1712 13.2193 1 12.806 1 12.375V1Z"
              stroke="#007A64"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.5 4.24927H7.50813V4.25739H7.5V4.24927Z"
              stroke="#007A64"
              strokeWidth="1.5"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.5 7.49927V10.7493"
              stroke="#007A64"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          Product Information
        </h3>
        <div className="product-details">
          <ul className="left-info">
            <li>
              <h4>Dimension</h4>
              <span>Width - 13.7 mm</span>
              <span>Height - 5.5 mm</span>
              <span>Size - 2-2/16 (0 mm)</span>
            </li>
            <li>
              <h4>Weight</h4>
              <span>Approx.Weight - 9.200 Gm</span>
              <strong>Purity</strong>
              <span>Purity - 18kt</span>
              <strong>Product Id</strong>
              <span>PRD-LBR-377-GL-2024-2208</span>
            </li>
            <li>
              <h4>Diamonds & Gemstones</h4>
              <span>Diamond Type - IJ-SI</span>
              <span>Total Diamonds - 78</span>
              <span>Total Weight - 0.310 ct</span>
            </li>
          </ul>
          <ul className="right-info">
            <li>
              <div className="product-info">
                <div className="thumb">
                  <img
                    width={30}
                    height={30}
                    src="./assets/slider_info_icons/cash-on-delivery.svg"
                    alt=""
                  />
                </div>
                <span>Cash on Delivery</span>
              </div>
            </li>
            <li>
              <div className="product-info">
                <div className="thumb">
                  <img
                    width={42}
                    height={36}
                    src="./assets/slider_info_icons/return.svg"
                    alt=""
                  />
                </div>
                <span>30 Days Return</span>
              </div>
            </li>
            <li>
              <div className="product-info">
                <div className="thumb">
                  <img
                    width={40}
                    height={36}
                    src="./assets/slider_info_icons/exchange.svg"
                    alt=""
                  />
                </div>
                <span>Lifetime Exchange</span>
              </div>
            </li>
            <li>
              <div className="product-info">
                <div className="thumb">
                  <img
                    width={38}
                    height={38}
                    src="./assets/slider_info_icons/bis.svg"
                    alt=""
                  />
                </div>
                <span>BIS Hallmark</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="price-breakdown">
        <div className="price-breakup">
          PRICE BREAKUP
          <a href="">Show More</a>
        </div>
      </div>
    </div>
  );
};
