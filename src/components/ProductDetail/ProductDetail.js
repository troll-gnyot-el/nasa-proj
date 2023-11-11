import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({ productInfo }) => {
  const { id } = useParams();
  const product = productInfo[id - 1];

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
          <div><p className='title-rainbow'>Sizes:</p> XS, S, M, L, Xl, XXl</div>
          <div><p className='title-rainbow'>Description:</p> {product?.description} </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
