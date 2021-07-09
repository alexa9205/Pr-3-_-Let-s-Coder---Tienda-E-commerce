import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="name_shop">
            <p>&copy; {new Date().getFullYear()} Copyright: <a href="http://alexa-shop.herokuapp.com/"> @LeX@ ShoP </a></p>
            <button><a href="#"> Back to top </a></button>
            </div>
        </div>
    )
}

export default Footer
