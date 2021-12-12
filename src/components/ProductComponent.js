import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductComponent = ({ items }) => {
  const renderList = items.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="menu_pdcmp" key={id}>
        <Link to={`/product/${id}`}>
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
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

ProductComponent.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ProductComponent;
