import React from "react";
import { useSelector } from "react-redux";

const ProductListing = () => {
  const products = useSelector((state) => state)
  console.log(products);
  return (
    <div className="menu_pdls">
      <div className="container_pdls">
        <h2>Heey ProductListing</h2>
      </div>
    </div>
  );
};

export default ProductListing;
