import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './Stateprovider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from 'axios';

function Payment() {

    const [{ basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const Elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret which allows us to 
        // charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies submits
                url:'/payments/create?total=${getBasketTotal(basket) * 100}'
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket] )

    const handleSubmit = async(event) =>{
        // do all the fancy stripe stuff....
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: Elements.getElement(CardElement)
            }
        })
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
                                <h3>
                                   Order total ({basket.length} items): <strong>{` ${value} `}</strong>
                                </h3>
                                
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                          />
                          <button disabled={processing || disabled || succeeded}>
                            <span>{ processing ? <p>Processing</p> : "Buy Now"}</span>
                          </button>
                        </div>

                        {/* Errors */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment