import React from 'react'
import Login from '../components/Login'
import Logout from '../components/Logout';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const user = useSelector(selectUser);
  return (
    <div className='home'>
      <Navbar />
        <h1>Welcome <span style={{color: "blue"}}>{user.username}</span></h1>
        <p>You are logged in</p>
        <br />
        <br />
        <br />
        <br />
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png' alt="" />
    </div>
  )
}

export default HomePage