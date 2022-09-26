import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {add} from "../store/cartSlice"
const Products = () => {
const dispatch=useDispatch();     
    const [products,setproducts]=useState([]);
   useEffect(()=>{
       const fetchProducts=async ()=>{
       const res=await fetch('https://fakestoreapi.com/products')
       const data=await res.json();
       console.log("data",data);
       setproducts(data);
    }
    fetchProducts();
   });

   const handleAdd=(product)=>
      {
       dispatch(add(product));
      }

  return(
  <div className='productswrapper ' >
    {
      products.map((product)=>(
        <div className='card' key={product.id}>
          <img src={product.image} alt=""/>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={()=>handleAdd(product)} className='btn btn-success'>ADD TO CART</button>
        </div>
      ))
    }
  </div>
  )
}
    
export default Products
// https://api.escuelajs.co/api/v1/products
// https://fakestoreapi.com/product1