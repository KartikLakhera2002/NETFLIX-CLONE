import React from 'react'
import { Link } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
import logo from '../../logo.png'

const Header= ()=>{
    return(
        <nav className='header'>
            <img src={logo} alt='logo' />
            <div>
                <Link to="/tvshows">Shows</Link>
                <Link to="/tvshows">Movies</Link>
                <Link to="/tvshows">Latest</Link>
                <Link to="/tvshows">Webseries</Link>
            </div>
            <ImSearch />
        </nav>
    )
}

export default Header