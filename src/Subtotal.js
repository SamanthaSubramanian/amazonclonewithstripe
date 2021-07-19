import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';
function Subtotal() {
    const history= useHistory();
    const [{basket},dispatch]=useStateValue();

    return (
        <div className="subtotal">
               <CurrencyFormat
               //rendertext, what gets rendered on the screen
            renderText={(value)=>(
                <>
                <p>
                    Subtotal({basket.length} items):
                    <strong> {value}</strong>
                </p>
                <small className="subtotal_gift">
                <input type="checkbox" id="gift"/>
                <label for="gift"> This order contains a gift</label>
                 
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs. "}
            />
            <button onClick={e=> history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal