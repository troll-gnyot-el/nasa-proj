import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({ productInfo, addToCart }) => {
  const { id } = useParams();
  const product = productInfo[id - 1];
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/nasa-proj/cart');
  };

  return (
    <div className="product-page-container">
      <h1 className="title-rainbow product-title">{product?.name}</h1>
      <div className="product-page">
        {product?.img && (
          <div className="product-background-card">
            <img
              className="stacked-image"
              src={require(`../../mock/mock_img/${product?.img}`)}
              alt={product?.name}
            />
            <img
              src={require(`../../mock/mock_img/storm-cloud.png`)}
              alt=""
              className={`product-image ${!product?.dark ? "dark-cloud" : ""}`}
            />
          </div>
        )}
        <div className="product-description">
          <div>
            <p className="title-rainbow">Sizes:</p> XS, S, M, L, XL, XXL
          </div>
          <div>
            <p className="title-rainbow">Description:</p> {product?.description}{" "}
          </div>
          <button onClick={handleAddToCart} className="title-rainbow add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
