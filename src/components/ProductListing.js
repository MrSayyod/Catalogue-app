import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { setProducts } from "../actions/productActions";
import { filterProduct } from "../actions/productActions";
import { CategoryFilter } from "./CategoryFilter";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const all = products.allProducts.products;
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Error", error);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleFilterChange = (e) => {
    dispatch(filterProduct(e.target.value));
  };
  const productsDisplay = () => {
    if (products.filter === "ALL") {
      return products.allProducts.products;
    }
    return products.allProducts.products.filter(
      (product) => product.category === products.filter
    );
  };
  let content;
  let filteredContent;
  if (products.filter === "ALL") {
    content = <ProductComponent items={all} />;
  } else {
    filteredContent = all.filter(
      (category) => category.category === products.filter
    );
    console.log(filteredContent);
    content = <ProductComponent items={filteredContent} />;
  }
  return (
    <div className="menu_pdls">
      <div className="category_filter">
        <CategoryFilter
          handleFilterChange={handleFilterChange}
          className="categoryDropdown"
        />
      </div>
      <div className="container_pdls"></div>
      <section>{content}</section>
    </div>
  );
};

export default ProductListing;
