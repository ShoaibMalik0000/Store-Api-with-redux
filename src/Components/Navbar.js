import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {

  const items=useSelector((state)=>state.cart);
  return (
    <div>
      <div className='container' style={{display:"flex",justifyContent:"space-between"}} >
        <span  className='logo' >Redux Store</span><hr/>
        <div className='links'  >
            <Link className='navLink' style={{color:"black",fontWeight:"500"}} to="/">Home </Link>
            <Link className='navLink' style={{color:"black",fontWeight:"500"}} to="/cart">Cart</Link>
              
            <span  className='cartCount'>Cart items:{items.length}</span>
        </div>
      </div>
    </div>
  )
} 

export default Navbar
