import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
const Cart = () => {

  const dispatch=useDispatch();
  const products=useSelector((state)=>state.cart);
  const handleRemove =(productId)=>
  {
      dispatch(remove(productId));
  }

  return(

    <div className='productswrapper ' >
      {
        products.map((product)=>(
          <div className='card' >
            <img src={product.image} alt=""/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={()=>handleRemove(product.id)} className='btn btn-danger'>Remove</button>
          </div>
        ))
      }
    </div>
    )
  }
export default Cart
