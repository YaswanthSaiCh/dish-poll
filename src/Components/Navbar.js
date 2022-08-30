import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div>Navbar</div>
            <Link to='/'> Home</Link>
            <Link to='/leaderboard'> Leaderboard</Link>
            <Link to='/login'> Login</Link>
        </nav>

    )
}

export default Navbar