import React from 'react'
import { useStateValue } from './Stateprovider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct.js'
import Subtotal from './Subtotal.js';

function Checkout() {
    const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout-left'>
        <img className='checkout-ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=''/>
    {basket?.length === 0 ? (
        <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
                You have no items in your basket. To buy one or more items, click "Add to basket" next to 
                the items.
            </p>
        </div>    
    ):
    (
    <div>
        <h2 className='checkout-title'>Your Shopping Basket</h2>

        {/* List out all of the Checkout Products */}
        {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
        ))}
    </div>    
    )}
    </div>
    {basket.length > 0 && (
        <div className='checkout-right'>
            <h1>Subtotal</h1>
            <Subtotal/>
        </div>    
    )}
    
    </div>    
  )
}


// react-currency-format
export default Checkout;