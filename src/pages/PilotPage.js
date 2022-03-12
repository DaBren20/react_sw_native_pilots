import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import PilotListing from '../components/PilotListing';
import Navbar from '../components/Navbar';

const PilotPage = (props) => {

  return (
    <div>
      <Navbar />
      <PilotListing />
    </div>
  )
}

export default PilotPage