import React from 'react'
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