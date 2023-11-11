import React, { useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card({ productInfo }) {
  const navigate = useNavigate();
  function handleClick(id) {
    console.log("id card", id);
    navigate(`/shop/${id}`);
  }

  useEffect(() => {
    console.log("productInfo img", productInfo?.img);
  });

  return (
    <div className="card" onClick={() => handleClick(productInfo?.id)}>
      <p className="card-text">{productInfo?.name}</p>
      {productInfo?.img && (
        <img
          className="card-img"
          src={require(`../../mock/mock_img/${productInfo?.img}`)}
          alt={productInfo?.name}
        />
      )}
      <p className="card-footer">{productInfo?.price}</p>
    </div>
  );
}

export default Card;
