import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({title, image, price,rating,id}) {
   const [{basket},dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                title: title,
                image:image,
                price:price,
                rating:rating,
            },

        })
        console.log(basket);

    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price"><small>&#8377; </small>
                <strong>{price}</strong></p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i)=>(
                    <p>&#11088;</p>

                    ))}

                </div>
            </div>
            <img src={image} alt=""></img>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
