import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="menu_pdcmp" key={id}>
        <div className="container_pdcmp">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="price">$ {price}</div>
              <div className="category">{category}</div>
            </div>
          </div>
          {/* <h2>Heey ProductComponent</h2> */}
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
