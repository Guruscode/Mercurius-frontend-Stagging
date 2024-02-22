import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';



export default function faker() {

  const[products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getProducts();
      setProducts(data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
     
    }
  };
  useEffect(() => {
    fetchData();
  }, [dependency]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    return products;
  };
  console.log(products);
  return (
    <div></div>
  )
}
