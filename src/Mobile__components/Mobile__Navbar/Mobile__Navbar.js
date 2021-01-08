import React from 'react'
import './Mobile__Navbar.scss'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

function Mobile__Navbar() {
    return (
        <div className="mobile__navbar">
            <IconButton className='menu'><MenuIcon  className='icon' /></IconButton>
        </div>
    )
}

export default Mobile__Navbar
