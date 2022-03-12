import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

const Logout = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
  return (
    <div>
        <p><span className='username'>{user ? user.username : "Welcome Guest"}</span></p>
        <button className='logout' onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout