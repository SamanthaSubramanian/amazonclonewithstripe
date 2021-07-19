import React from 'react'
import './Productmain.css'
import {Link} from "react-router-dom"

function Productmain({title, image}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                
            </div>
            <img src={image} alt="" ></img>
            
          </div>
    )
}

export default Productmain
