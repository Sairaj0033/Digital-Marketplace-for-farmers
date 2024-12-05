

// import React, { useEffect, useState } from 'react';
// import '../styles/ProductList.css';

// const ProductList = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/api/products')
//             .then((response) => response.json())
//             .then((data) => setProducts(data));
//     }, []);

//     return (
//         <div className="product-list">
//             {products.map((product) => (
//                 <div key={product._id} className="product-card">
//                     <img
//                         src={product.image}
//                         alt={product.name}
//                         className="product-image"
//                     />
//                     <h3>{product.name}</h3>
//                     <p>Price: ₹{product.price}</p>
//                     <p>{product.description}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProductList;

import React, { useEffect, useState } from 'react';
import '../styles/ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    // Function to add product to cart
    const addToCart = (product) => {
        // Get cart from localStorage or initialize with an empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if product is already in the cart
        const existingProduct = cart.find((item) => item._id === product._id);

        if (existingProduct) {
            // If the product already exists, increase the quantity
            existingProduct.quantity += 1;
        } else {
            // Otherwise, add a new product with quantity 1
            cart.push({ ...product, quantity: 1 });
        }

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Alert user about the addition
        alert(`₹{product.name} added to cart`);
    };

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product._id} className="product-card">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                    />
                    <h3>{product.name}</h3>
                    <p>Price: ₹{product.price}</p>
                    <p>{product.description}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

