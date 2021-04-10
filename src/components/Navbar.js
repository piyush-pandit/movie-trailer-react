import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                        {/* <a className="navbar-brand text-white text-lg brand-text" href="#">
                            Movies Information !
                        </a> */}
                        <Link to="/" className="btn btn-dark text-light">
                               <h4>Home-Page </h4> 
                        </Link>
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                            <a  href="https://www.youtube.com/"><i className="fab fa-youtube fa-5x" id="youtube-logo" /></a>  
                        </li>
                        <li className="nav-item d-inline-block mr-4">
                            <a  href="https://www.imdb.com/"><i className="fab fa-imdb fa-5x" id="imdb-logo" /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

