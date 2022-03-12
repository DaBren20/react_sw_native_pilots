import React, {useState, useEffect} from 'react'
import ProfileList from './ProfileList'

const PilotListing = (props) => {
    const[people, setAllPilots] = useState([]);
  
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/?format=json`)
        .then(res => res.json())
        .then(json => {
          console.log(json.results)
          setAllPilots(json.results)
        })
        .catch(err => {
          console.log(`Error ${err}`)
        })
      },[])
  
    return (
    <div>
        <h1>All Star Wars Pilots</h1>
        <ProfileList data={people} />
    </div>
  )
}

export default PilotListing