// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getdata } from "../Redux/ProductSlice";
// import ProductCard from "./ProductCard";

// const Products = () => {
//   const [state,setState]=useState()
//   console.log(state);
//   const dispatch = useDispatch();
  
//   const Products = useSelector((state) => state.product.allProduct);
//   const [data_state,setDataState]=useState()
//   // console.log(Products)
//   const loading = useSelector((state) => state.product.loading);
//   const error = useSelector((state) => state.product.error);

//   useEffect(() => {
//     dispatch(getdata());
//   }, []);

//   function handleClick(data) {
//     setState(data)
//     console.log(data);
//   }
  
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }
//   else if (error) {
//     return <h3>Error...</h3>
//   }
//   else {
//     return (
//       <div className="header">
//         <div className="main-category">
//           <h2>category</h2>
// <p className="category" onClick={()=>handleClick("smartphones")} value="smartphones">smartphones</p>
// <p className="category"  value="laptops">laptops</p>
// <p className="category"  value="fragrances">fragrances</p>
// <p className="category"  value="skincare">skincare</p>
// <p className="category"  value="groceries">groceries</p>
// <p className="category"  value="home-decoration">home-decoration</p>
//        </div>
//         <div className="main-container">
//           {/* Check if there are products before mapping over them */}
//           {Products.length > 0 &&
//             Products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//         </div>
//       </div>
//     );
//   }
// };

// export default Products;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../Redux/ProductSlice";
import ProductCard from "./ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.allProduct);
  // console.log(products)
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const [category, setCategory] = useState(null);

  useEffect(() => {
    dispatch(getdata());
  },[dispatch]);

  function handleClick(category) {
    setCategory(category);
  }

  // Filter products based on the selected category
  const filteredProducts = category ? products.filter((product) => product.category === category): products;

  if (loading) {
    return <h2>Loading...</h2>;
  } else if (error) {
    return <h3>Error...</h3>;
  } else {
    return (
      <div className="header">
        <div className="main-category">
          <h2 className="head-category">category</h2>
          <p className="category" onClick={() => handleClick("smartphones")} value="smartphones">smartphones</p>
          <p className="category" onClick={() => handleClick("laptops")} value="laptops">laptops</p>
          <p className="category" onClick={() => handleClick("fragrances")} value="fragrances">fragrances</p>
          <p className="category" onClick={() => handleClick("skincare")} value="skincare">skincare</p>
          <p className="category" onClick={() => handleClick("groceries")} value="groceries">groceries</p>
          <p className="category" id="home-decoration" onClick={() => handleClick("home-decoration")} value="home-decoration">home-decoration</p>
        </div>
        <div>
        <h2 className="category-heading">{category ?category: "All Product"}</h2>
          
        <div className="main-container">
          {/* Check if there are products before mapping over them */}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found for the selected category.</p>
          )}
        </div>
        </div>
      </div>
    );
  }
};

export default Products;
