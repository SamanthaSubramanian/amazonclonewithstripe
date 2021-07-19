import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
function CheckoutProduct({id, image,title, price,rating,hideButton}) {
    const [{basket},dispatch]=useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    
    }
    console.log(basket,dispatch);
    return (
        <div className="checkoutProduct"> 
            <img className="checkoutProduct__image" src={image} alt=""></img>
        
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price"><small>Rs. </small><strong>{price}</strong></p>
            <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i)=>(
                    <p>&#11088;</p>
                    ))}

                </div>
                {!hideButton && (
                <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
        </div>

        </div>

    )
}

export default CheckoutProduct
