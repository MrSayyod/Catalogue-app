import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedProduct,
  removeSelectedProduct,
} from '../actions/productActions';

const ProductDetail = () => {
  const product = useSelector(state => state.product);
  const {
    title, image, price, category, description,
  } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch(error => {
        console.log('Error', error);
      });

    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== '') {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="placeholder segment">
          <div className="two column center grid">
            <div className="vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <p className="teal tag label">
                    $
                    {price}
                  </p>
                </h2>
                <h3 className="brown block header">{category}</h3>
                <p>{description}</p>
                <div className="vertical animated button" tabaIndex="0">
                  <div className="hidden content">
                    <i className="shop icon" />
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
