import React from "react";

const ProductDetail = ({ product }) => {
  if (!product) return null;

  return (
    <div className="my-4">
      <h2>Product Details</h2>
      <div className="card">
        <div>
          <h3 className="card-title">{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
