//  components/product.js

import React, { useState } from "react";
const Product = ({key, name, price}) => {  // 用{大括號}接受prop
    const decrement = () => {
        if ( quantity > 0 ){
              setQuantity(quantity - 1);    // quantity = quantity - 1
        }
      };
      const increment = () => {
        setQuantity(quantity + 1);   // 可以想成 quantity = quantity + 1
    };
    const [ quantity, setQuantity] = useState(0);
    return(
          <div>
              <h2>{name}</h2>  
              <p>${price}</p>  
              <h3>quantity:{quantity}</h3>
              <div>
                  <button onClick={increment}>+</button>
                  <button onClick={decrement}>-</button>
              </div>
              <hr/>
          </div>
      )	
  };

export default Product