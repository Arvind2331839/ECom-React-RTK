import React from "react";
import "./FullData.css";
import star from '../assets/star.svg'
const FullData = () => {
  let data = 
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    };
  
  console.log(data.title);
  return(
    <div className="FullData-container">
       <div className="full-image">
            <img className="fulldata-img" src={data.image} alt="" />
        </div>

        <div className="full-data">
            <div className='title'><span className="lowLight">Title-</span><span>{data.title}</span></div>
            <div className="rating">
            <div>{data.rating.rate}<img id="ratingStar" src={star} alt="" /></div>
            <div>{data.rating.count} Ratings</div>
            </div>
            <div className='title'><span className="lowLight">Price-</span><span>{data.price}</span></div>
            <div className="title"><span className="lowLight">Category-</span><span>{data.category}</span></div>
            <div className="title" id="discription"><span className="lowLight">Description-</span>{data.description}</div>
            
          
        </div>
    </div>
  )
  
};

export default FullData;
