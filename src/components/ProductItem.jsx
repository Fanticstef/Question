import React from "react";

const ProductItem = ({ product, onDelete, onViewDetail, onAddToCart }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ${product.price}</p>
        <button
          className="btn btn-info me-2 text-light"
          onClick={() => onViewDetail(product)}
        >
          View Details
        </button>
        <button
          className="btn btn-success me-2"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
