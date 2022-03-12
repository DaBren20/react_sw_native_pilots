import React from 'react'
import Card from './Card'
import PilotListing from './PilotListing'
import PilotPage from './PilotListing'

const ProfileList = ( { data } ) => {
  return (
    <div className='AllPilots'>
      <div className='card-deck'>
        {data.map((people, index) => (<Card key={index} name={people.name} />))}
      </div>
    </div>
  )
}

export default ProfileList