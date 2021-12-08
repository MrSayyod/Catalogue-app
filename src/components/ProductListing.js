import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { setProducts } from "../actions/productActions";
import { filterProduct } from "../actions/productActions";
import { CategoryFilter } from "./CategoryFilter";
import { log } from "async";
import { product } from "prelude-ls";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products)
  console.log(products.allProducts)
  console.log(products.allProducts.products)
  // console.log(products.allProducts.products);
  // console.log(typeof(products.allProducts.products));
  // const arr = products.map(item=>item)
  // console.log(arr);
  // console.log(typeof(arr));
  // console.log(typeof(products))
  // console.log(`1 ${products}`)
  
  const dispatch = useDispatch()

  //const filteredProducts = filter === 'CATEGORIES' ? products.allProducts.products : //products.allProducts.products.filter((item) => item.category === filter)
  // const filteredProducts = products.allProducts.products.filter((item) => item.category === 'electronics')
  // const filteredProducts = filter === 'ALL' ? products : products.allProducts.products.filter((item) => item.category.includes(filter))
  // const data = filteredProducts.map((item)=> (
    // <ProductComponent key={item.id} product={item} />
  // ))
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Error", error);
      });
      // console.log(response.data);
      dispatch(setProducts(response.data))
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleFilterChange = (e) => {
    dispatch(filterProduct(e.target.value))
  }
  console.log(products);
  const productsDisplay = () => {
    if(products.filter === 'ALL') {
      return products.allProducts.products
    }
    return products.allProducts.products.filter((product) => product.category === products.filter)
  }
  // console.log("Products: ", products);
  return (
    <div className="menu_pdls">
      <div>
        <CategoryFilter handleFilterChange = {handleFilterChange} className="categoryDropdown"/>
      </div>
      <section>
        {/* {data} */}
      </section>
      <div className="container_pdls">
        {productsDisplay().map((product) => (
          <h3 key={product.id}>{product.title}</h3>
        ))}
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
