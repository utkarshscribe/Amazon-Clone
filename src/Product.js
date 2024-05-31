import React from 'react'
import './Product.css'
import { useStateValue } from './Stateprovider';

function Product({ id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const addtoBasket = () => {
        // Add items to my basket.......
        dispatch({
            type: 'Add-To-Basket',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
 
    };

  return (
    <div className='product'>
        <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product-rating'>
            {
                Array(rating)
                .fill()
                .map((_) =>{
                    <p></p>
                })
            }
        </div>
        </div>
        
        <img src={image} alt=''/>
        <button onClick={addtoBasket}>Add to Basket</button>
    </div>
  )
}

export default Product;