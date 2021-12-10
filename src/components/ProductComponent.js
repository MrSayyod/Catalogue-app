import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const ProductComponent = ({items}) => {
  // const products = useSelector((state) => state.allProducts.products);
  // items = products
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
          {/* <h2>Heey ProductComponent</h2> */}
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

// const Category = ({ category: { strCategory, strCategoryThumb } }) => {
//   const dispatch = useDispatch();

//   return (
//     <Link to="/meals" onClick={() => dispatch(mealFilter(strCategory))}>
//       <div
//         data-testid="category"
//         className="img-category-container"
//         style={{
//           backgroundImage: `url(${strCategoryThumb})`,
//         }}
//       >
//         <h5 className="transparent-banner pl-3 py-2">{strCategory}</h5>
//       </div>
//     </Link>
//   );
// };

// Category.propTypes = {
//   category: PropTypes.object.isRequired,
// };

// export default Category;