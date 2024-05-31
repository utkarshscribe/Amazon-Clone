import React, {useState} from 'react'
import "./Login.css"
import {Link} from "react-router-dom"

function Login() {
  const [email, setEmail] = useState(' ');
  const [password,setPassword] = useState(' ');
  const signin = e => {
    e.preventDefault();

    // firebase login shit
  }
  const register = e => {
    e.preventDefault();

    // firebase register shit
  }

  return (
    <div className='login'>
        <Link to='/'>
        <img className='login-logo' src='https://th.bing.com/th/id/R.e479c6b4c67f974f7ceb4605f17332d9?rik=RGN0%2biDVLnpAXw&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f05%2fAmazon-logo.png&ehk=xF4jh7u2oTUutljz77AHIyPxQVM26QYgt7y0za9cQTs%3d&risl=&pid=ImgRaw&r=0' alt=''></img>
        </Link>

        <div className='login-container'>
            <h1>Sign-In</h1>

            <form>
                <h4>E-mail</h4>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h4>Password</h4>
                <input type='password' value={password} onChange={e => setPassword (e.target.value)}/>

                <button type='submit' onClick={signin} className='login-signinbutton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the Amazon Clone condition of the use & sale. Please see our Policy Notice, our Cookies Notice and our Interest-Based Ads Justice.
            </p>

            <button onClick={register} className='login-registerbutton'>Create your Account</button>
        </div>

    </div>
  )
}

export default Login