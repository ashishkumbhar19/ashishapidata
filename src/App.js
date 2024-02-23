import React, { useState, useEffect } from 'react';
import axios from 'axios'


function App() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products/1');
      setProductData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Product Details</h1>
      {productData ? (
        <div>
          <h2>{productData.title}</h2>
          <p><strong>Description:</strong> {productData.description}</p>
          <p><strong>Price:</strong> ${productData.price}</p>
          <p><strong>Discount Percentage:</strong> {productData.discountPercentage}%</p>
          <p><strong>Rating:</strong> {productData.rating}</p>
          <p><strong>Stock:</strong> {productData.stock}</p>
          <p><strong>Brand:</strong> {productData.brand}</p>
          <p><strong>Category:</strong> {productData.category}</p>
          <img src={productData.thumbnail} alt="Thumbnail" />
          <h3>Images</h3>
          <ul>
            {productData.images.map((image, index) => (
              <li key={index}>
                <img src={image} alt={`Product ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
