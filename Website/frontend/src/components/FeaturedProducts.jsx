import React from 'react';

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-container">
        <div className="product">
          <img src="product1.jpg" alt="Product 1" />
          <h3>Product Name 1</h3>
          <p>$19.99</p>
          <button>Add to Cart</button>
        </div>
        {/* Repeat for more products */}
      </div>
    </section>
  );
}

export default FeaturedProducts;
