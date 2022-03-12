import React from 'react'
import Login from '../components/Login'
import Logout from '../components/Logout';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <Navbar />
        <h1>Welcome</h1>
    </div>
  )
}

export default HomePage