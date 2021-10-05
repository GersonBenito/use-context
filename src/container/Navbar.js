import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to='/' >useContext</Link>
                <Link className="nav-link" to='/' >Home</Link>
                <Link className="nav-link" to='/login' >Login</Link>
                <Link className='nav-link' to='/about' >About</Link>
            </nav>
        </>
    )
}
