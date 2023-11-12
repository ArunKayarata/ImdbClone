import React from 'react'
import Logo from "./MovieLogo.png";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className=' flex border space-x-8 items-center   pl-3 py-4'>
        <img src={Logo}  className="w-[50px]"></img>
        
             <Link to="/"  className=' text-blue-400'> Movies</Link>
            <Link to="/watchlist" className=' text-blue-400'> WatchList</Link> 
{/*         
            // routing to another page can also be achievable usinfg anchor tags like 'a' but 
            they take more time for loading hence we make use of link in react router dom
            <a href="/"  className=' text-blue-400'> Movies</a>
            < a href="/watchlist" className=' text-blue-400'> WatchList</a>  */}
         
         
      
    </div>
  )
}

export default Navbar