import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(false);
  const [pincode, SetPincode] = useState("");

  const contextVal = { wishlist, setWishlist, pincode, SetPincode };

  return <Context.Provider value={contextVal}>{children}</Context.Provider>;
};
