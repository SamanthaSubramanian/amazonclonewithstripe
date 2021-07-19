import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import {Link, useHistory} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from './reducer'
import axios from './axios'
import {db} from './firebase.js'
function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError]=useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    const history=useHistory();

    useEffect(()=>{
        //how to use a function in useeffect
        const getClientSecret = async ()=>{
            const response = await axios({
                method: 'post',
                //stripe expects total in the subunit of the currency which is why we * 100 to the url 
                //to convert rupees to paisa
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            });  
        setClientSecret(response.data.clientSecret) 
         }
        getClientSecret();

    },[basket])
    const handleSubmit = async (event) =>{
        event.preventDefault();
        setProcessing(true);

       const payload =await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //paymentintent=payment confirmation
            
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created:paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({type: 'EMPTY_BASKET'})
            history.replace('/Orders')
        }) 

    }

    const handleChange = event =>{
        //listen for any changes in t he card element
        //display errors as the customer puts in their details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1> Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 Bhayandar,</p>
                        <p>Maharashtra-401105</p>

                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item=>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            ></CheckoutProduct>
                        ))}
                    </div>
                    </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}></CardElement>
                                <div className='payment__priceContainer'>
                                <CurrencyFormat
                          renderText={(value)=>(
                            <h3>Order Total : {value}</h3>
                            
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"Rs. "}
                            />
                            <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p>:"Buy Now"}</span></button>
                                </div>
                                {error && <div>{error}</div>}
                            </form>
                    </div>

                    
                    </div>

            </div>
        </div>
    )
}

export default Payment
