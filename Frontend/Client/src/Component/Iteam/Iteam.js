import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../../Styles/Iteam.css";

const Iteam = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/recommend/product/${id}`)
      .then(response => {
        setProduct(response.data);
        console.log("product", response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="iteam-container">
      <div className="iteam-image-container">
        <img className="iteam-image" alt={product.name} src={product.img} />
      </div>
      <div className="iteam-details-container">
        <h1 className="iteam-name"> {product.name}</h1>

        <p className="iteam-features"> {product.features}</p>
        <p className="iteam-price"> {product.price}</p>
        <p className="iteam-type"> {product.type}</p>
        <p className="iteam-stock"> {product.stock}</p>
      </div>
    </div>
  );
};
export default Iteam;
