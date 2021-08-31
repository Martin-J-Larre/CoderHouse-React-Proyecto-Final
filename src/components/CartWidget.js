import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <>
          <ul>
              <li>
                 <Link to="/">
                    <i className="fas fa-shopping-cart"></i>
                 </Link>
              </li>
          </ul> 
        </>
    )
}
export default CartWidget;