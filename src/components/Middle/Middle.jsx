import { LabDetail } from "./LabDetail";
import { MainSlider } from "./MainSlider";
import { ProductDetails } from "./ProductDetails";

export const Middle = () => {
  return (
    <div className="middle container">
      <div
        className="path"
        style={{
          fontSize: "0.8rem",
          color: "#000",
          padding: "15px 0",
          letterSpacing: "0.04rem",
          wordSpacing: "0.1rem",
        }}
      >
        Home {" > "} Products {" > "} Bracelets {" > "} The Squares Diamond
        Bracelet
      </div>
      <MainSlider />
      <ProductDetails />
      <LabDetail />
    </div>
  );
};
