import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { useStateValue } from './Stateprovider'
import { auth } from "./firebase"

function Header() { 
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
  return (
    <nav className='header'>
        {/* logo on the left -> image*/}
        {/* Link is mainly used to connect anything to a specific link like here we use link to make amazon logo clickable*/}



        <Link to="/">
        <img className='header-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''></img>
        </Link>
        {/* Search Box*/}
        <div className='header-search'>
        <input type='text' className='header-searchInput' />
        <SearchIcon className='header-searchIcon' />
        </div>


        {/* 3 links */}

        <div className='header-nav'>
         {/* 1st Link*/}
         <Link to={!user && "/login"} className='header-link'>
            <div onClick={handleAuthentication}  
            className='header-option'>
                {/* user?.email || "Guest" */}
                <span className='header-optionlineone'>Hello { !user ? 'Guest' : user.email}</span>
                <span className='header-optionlinetwo'>{ user ? 'Sign Out' : 'Sign In'}</span>
            </div>
         </Link>

         {/* 2nd Link*/}
         <Link to="/login" className='header-link'>
            <div className='header-option'>
                <span className='header-optionlineone'>Returns</span>
                <span className='header-optionlinetwo'>& Orders</span>
            </div>
         </Link>

         {/* 3rd Link*/}
         <Link to="/login" className='header-link'>
            <div className='header-option'>
                <span className='header-optionlineone'>Your</span>
                <span className='header-optionlinetwo'>Prime</span>
            </div>
         </Link>

         {/* 4th Link*/}
         <Link to='/checkout' className='header-link'>
            <div className='header-optionbasket'>
                {/* Shopping basket items*/}
                <ShoppingBasketIcon />
                {/* Number of items in the basket*/}
                <span className='header-optionlinetwo header-basketcount'>{basket?.length}</span>
            </div>
         </Link>




        </div>

         
        
        {/* Basket icon with number */}
        
    </nav>
  )
}

export default Header