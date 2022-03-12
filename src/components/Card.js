import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className="card" style="width: 18rem;">
            <div className="card-body">
                <h5 className="card-title">Name: {props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Gender: {props.gender}</h6>
                <p className="card-text">Starship(s): </p>
                <p>{props.starships}</p>
            </div>
        </div>
    </div>
  )
}

export default Card