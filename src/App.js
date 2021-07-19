import './App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import { loadStripe} from '@stripe/stripe-js'
import {Elements } from "@stripe/react-stripe-js"
import Orders from './Orders';

//public key
const promise = loadStripe('pk_test_51IqI83SCDhiOY6FKefsPhplkx12Gn4OVOPtgauwkT8BhCY4fT6pQ0eIzH07YYKzHEWeqzO9VaZT4nctGWcZ8c3dh009fDT6MGX');

function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
    //runs only once when app loads
    auth.onAuthStateChanged(authUser =>{
      console.log('User is: ',authUser);
      if(authUser){
      //the user has just logged in or was logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
      }else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  },[])
  
  return (
    <Router>
    <div className="app">

      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
      <Route path="/checkout">
      <Header></Header>
      <Checkout></Checkout>
      </Route>

      <Route path="/orders">
      <Header></Header>
      <Orders></Orders>
      </Route>

      <Route path="/masks">
      <Header></Header>
      <Orders></Orders>
      </Route>

      <Route path="/payment">
      <Header></Header>
      <Elements stripe={promise}>
      <Payment></Payment>
      </Elements>
        </Route>

      <Route path="/">
      <Header></Header>
      <Home></Home>
        </Route>
      
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
