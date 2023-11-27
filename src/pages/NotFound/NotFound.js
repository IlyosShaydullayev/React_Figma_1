import React from "react";
import './NotFound.css'
import { Link } from 'react-router-dom';

function NotFound() {
  return( 
    <div>
        <Link to={'/'}><p className="not-found" title="Home Page"> 404 Not Found </p></Link>
    </div>
    )
}

export default NotFound;
