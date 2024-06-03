import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from './Stateprovider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Payment() {

    const [{ basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const Elements = useElements();

    const [error, setError] = useState(null);
    const [disable, setDisabled] = useState(null);

    const handleSubmit = e =>{
        // do all the fancy stripe stuff....
    }

    const handleChange = event =>{
        // Listens for the changes in the CardElement
        // and display any errors as the Customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '')
    }

  return (
    <div className='payment'>
        <div className='payment-container'>
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>
            {/* Payment Section - Delivery Address */}
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment-address'>
                    <p>{ user?.email}</p>
                    <p>231 BIET KOCCHA BHANAWAR</p>
                    <p>Jhansi</p>
                </div>
            </div>

            {/* Payment Section - Items Review */}
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Review items and Delivery</h3>
                </div>
                <div className='payment-items'>
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

            </div>

            {/* Payment Section - Delivery Address */}
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment-details'>
                    {/* From here we use Stripe */}

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>

                        <div className='payment-priceContainer'>
                          <CurrencyFormat 
                            renderText={(value) => (
                                <>
                                <p>
                                    Subtotal ({basket.length} items): <strong>{` ${value} `}</strong>
                                </p>
                                <small className='subtotal-gift'>
                                    <input type='checkbox'/> This order contains gifts
                                </small>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                          />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment