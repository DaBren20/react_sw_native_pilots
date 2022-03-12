import React from 'react'
import Login from '../components/Login'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import HomePage from './HomePage';

const LoginPage = () => {
const user = useSelector(selectUser);
  return (
    <div>
        {user ? <HomePage /> : <Login />}
    </div>
  )
}

export default LoginPage