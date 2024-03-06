import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import Cart from '../screens/Cart';
import Modal from '../Modal';
import { useCart } from './contextReducer';

function Navbar() {
  const navigate=useNavigate();
  const data= useCart();
  const[cartView,setCartView]=useState(false);
 const handleLogout=()=>{
    localStorage.removeItem('authToken');
    alert('LogOut SuccessFully')
      navigate('/login')

 }
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{ backgroundColor: "#00bc8c" }}>
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 " style={{fontFamily:'Luckiest Guy, cursive'}} to="/">Foody</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
            </li>
            {localStorage.getItem('authToken') ? (
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/myOrders">My Orders</Link>
              </li>
            ) : null}
          </ul>

          <i className='d-flex'>
            {localStorage.getItem('authToken') ? (
            <div className='d-flex'> 

              <div className="nav-link bg-white rounded " onClick={()=>setCartView(true)}>
                Cart {" "}
                <Badge pill bg="danger">{data?data.length:0}</Badge>
                </div>
                {cartView? <Modal onClose={()=>setCartView(false)} ><Cart></Cart></Modal>: null}
              <div  className="nav-link bg-white text-danger rounded mx-5"  onClick={handleLogout}>Logout</div>
              </div>
            ) : (
              <>
                <Link className="nav-link bg-white rounded" to="/login">Login</Link>
                <Link className="nav-link bg-white rounded mx-5" to="/signup">Signup</Link>
              </>
            )}
          </i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
