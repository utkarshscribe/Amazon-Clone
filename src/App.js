import React, { useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Payment from "./Payment.js"
import Login from "./Login.js"
import {auth} from "./firebase.js" 
import { useStateValue } from "./Stateprovider.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe (
  "pk_test_51ljadnlanfvndfnvnsdkvknskdnv"



);

function App() {

  const [{}, dispatch] = useStateValue();



  useEffect(() => {
    // This will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })    
      } else {
        // the user is logged out
        dispatch ({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])



  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>.

            
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          {/*This is the default route */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
          
        </Switch>
      </div>
    </Router> 
  );
}

export default App;


{/* We need React router */}

{/*localhost.com*/}
{/*localhost.com/checkout*/}
{/*localhost.com/login*/}