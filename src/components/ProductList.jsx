import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onDelete, onViewDetail, onAddToCart }) => {
  return (
    <div className="row">
      <h2 className="col-12 my-4">Product List</h2>
      {products.length === 0 ? (
        <div className="col-12 text-center">
          <p>No products available</p>
        </div>
      ) : (
        products.map((product) => (
          <div key={product.id} className="d-flex mb-3">
            <ProductItem
              product={product}
              onDelete={onDelete}
              onViewDetail={onViewDetail}
              onAddToCart={onAddToCart}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
