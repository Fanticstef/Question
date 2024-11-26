import React, { useState } from "react";
import Cart from "../components/Cart";
import ProductDetail from "../components/ProductDetail";
import ProductList from "../components/ProductList";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Product Page</h1>

      <div className="mb-3">
        <button
          className="btn btn-primary"
          onClick={() =>
            addProduct({ id: Date.now(), name: "New Product", price: 100 })
          }
        >
          Add New Product
        </button>
      </div>

      <ProductList
        products={products}
        onDelete={deleteProduct}
        onViewDetail={setSelectedProduct}
        onAddToCart={addToCart}
      />

      {selectedProduct && <ProductDetail product={selectedProduct} />}

      <Cart cartItems={cart} />
    </div>
  );
}
