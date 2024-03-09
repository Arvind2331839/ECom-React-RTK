import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to the cart!`, { autoClose: 1000 });
  };
  const imageUrls = product.images || [];
  // Settings for the react-slick carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="main-container">
      <div className="product-container">
        {/* Use the Slider component for the carousel */}
        <Slider {...sliderSettings}>
          {imageUrls.map((image, index) => (
            <img key={index} className="image" src={image} alt="Product Image" />
          ))}
        </Slider>

        {/* if you dont want to show slick crousal */}
        {/* <img className="image" src={product.images[0]} alt="Product Image" /> */}
        <p className="title"><span id='card-title'>Title- </span>${product.title}</p>
      <p className="price"><span id='card-price'>Price- </span>${product.price}</p>
      {/* <p className="description">{product.description}</p> */}
      <button className="product-btn" onClick={() => handleAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
