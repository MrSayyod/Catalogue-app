import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/ProductComponent.css';

const ProductComponent = ({ items }) => {
  const renderList = items.map(product => {
    const {
      id, title, image, price, category,
    } = product;
    return (
      <div className="col-3" key={id}>
        <Link to={`/product/${id}`}>
          <div className="container_pdcmp">
            <div className="card p-2">
              <div className="product_image">
                <img src={image} alt={title} className="w-100 h-100" />
              </div>
              <div className="content d-flex flex-column justify-content-between pb-0">
                <div className="product_header fw-bold text-decoration-none fs-6">{title}</div>
                <div className="price fw-bold fs-6">
                  $
                  {price}
                </div>
                <div className="category p-3 text-center rounded-3">{category}</div>
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
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductComponent;
