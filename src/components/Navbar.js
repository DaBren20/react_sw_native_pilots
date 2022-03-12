import React from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';


const Navbar = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/pilot">Pilots</Link>
                    <Link className="nav-item nav-link" to="/favourites">Favourite</Link>
                    <Link className="nav-item nav-link" to="/new">New</Link>
                    <div className='username'>
                        <p>Welcome <span>{user ? user.username : "Guest"}</span></p>
                    </div>
                    <span>{ user ? <button onClick={(e) => handleLogout(e)}>Logout</button> : "" }</span>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar