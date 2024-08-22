import { useContext } from "react";
import { styled } from "styled-components";
import { Context } from "../../context/Context";

const Wrapper = styled.div`
  background: linear-gradient(90deg, rgb(1, 36, 51) 0%, rgb(0, 122, 100) 100%);
  padding: 5px 0px;
  }
  .container {
    padding-left: 15px;
    padding-right: 15px;
    margin: 0px auto;
    width: auto;
  }
`;

const InnerHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1px 0;
  overflow: hidden;
  .inner-right {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 15px;
  }
  .inner-text {
    font-size: 14px;
    letter-spacing: 0.05rem;
    text-align: center;
    width: 100%;
    color: rgb(255, 255, 255);
    // transition: opacity 1s ease-in-out;
  }
  .pincode {
    font-weight: 700;
    font-size: 13px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
  }
  .pin,
  .map {
    color: transparent;
  }
  @media (max-width: 767px) {
    .inner-right {
      display: none;
    }
    .inner-text {
      transform: translateX(100%);
      animation: my-animation 15s linear infinite;
    }
    @keyframes my-animation {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
`;

export const TopHeader = () => {
  const { pincode } = useContext(Context);

  return (
    <Wrapper>
      <div className="container">
        <InnerHead>
          <span className="inner-text">Gemlay By Garnet Lanee</span>
          <div className="inner-right">
            <span role="button" className="inner-text pincode">
              {pincode ? pincode : "Pincode"}
            </span>
            <img
              role="button"
              src="./assets/top_header_icons/pinCodeModalIcon.svg"
              alt=""
            />
            <img
              role="button"
              src="./assets/top_header_icons/flag.svg"
              alt=""
            />
          </div>
        </InnerHead>
      </div>
    </Wrapper>
  );
};
