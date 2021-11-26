import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { title, image, price, category, description } = product
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log("Error", error);
      });

    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
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
              <div className='column lp'>
                <img className="fluid image" src={image} />
              </div>
              <div className='column rp'>
                <h1>{title}</h1>
                <h2>
                  <a className="teal tag label">$ {price}</a>
                </h2>
                <h3 className="brown block header">{category}</h3>
                <p>{description}</p>
                <div className="vertical animated button" tabaIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

    // <div className="menu_pddtl">
    //   <div className="container_pddtl">
        
    //     {/* <h2>Heey ProductDetail</h2> */}
    //   </div>
    // </div>
  );
};

export default ProductDetail;
