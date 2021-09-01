import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({items}) => {
    return (
        <>
          <ul>
              <li>
                 <Link to="/item-detail-container" >
                    <i className="fas fa-shopping-cart"></i>
                    <span className="number-nav">
                        {items.length === 0 ? "" : items.length}
                    </span>
                 </Link>
              </li>
          </ul> 
        </>
    )
}
export default CartWidget;