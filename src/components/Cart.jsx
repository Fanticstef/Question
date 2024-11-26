import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="my-4">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Your cart is empty.
        </div>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.name} - ${item.price}
              <span className="badge bg-primary rounded-pill">1</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
