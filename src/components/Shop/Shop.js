import React from "react";
import Card from "../Card/Card";
import "./Shop.css";
function Shop({ productCards }) {

  return (
    <div className="shop-page">
      {Array.isArray(productCards) ? (
        productCards.map((el, i) => (
          <Card key={productCards[i].id} productInfo={productCards[i]}></Card>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Shop;
