import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue  } from './Stateprovider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log( id, title, image, price, rating );

    const Removefrombasket = () => {
        // remove item from basket 
        dispatch({
            type: "Remove-From-Basket",
            id: id,
        })
    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct-image' src={image} alt=''/>

        <div className='checkoutProduct-info'>
            <p className='checkoutProduct-title'>{title}</p>

            <p className='checkoutProduct-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='checkoutProduct-rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p></p>
                ))}
            </div>
          <button onClick={Removefrombasket}>Remove From Basket</button>  
        </div>
    </div>
  )
}

export default CheckoutProduct;