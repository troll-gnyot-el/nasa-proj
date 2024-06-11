import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import "./Cart.css";
import "../ProductDetail/ProductDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Cart = ({ cartItems, removeFromCart, handlePaymentSuccess }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + +item.price.replace(/\$/g, ""),
    0,
  );

  return (
    <div className="cart">
      <h2 className="title-rainbow">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} USD
              <button
                onClick={() => removeFromCart(index)}
                style={{ marginLeft: "30px" }}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3 style={{ marginBottom: "50px", marginTop: "50px" }}>
        Total: {total} USD
      </h3>
      <input placeholder="Full name" type="text" required={true} />
      <input placeholder="Address" type="text" required={true} />
      <input placeholder="Phone" type="phone" required={true} />
      <input placeholder="E-mail" type="email" required={true} />
      <br />
      <br />
      <div style={{ width: "410px", marginLeft: "10px" }}>
        {cartItems.length > 0 && (
          <PayPalButton
            amount={total}
            onSuccess={(details, data) => handlePaymentSuccess(details, data)}
            options={{
              clientId:
                "AeEG-HUqRId09KkjNZM06FnN8CT788z9d8d32FKRbchQncsyqlkiGpdAXX69ETCrkuIpEKDCbNFG7fY_",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
