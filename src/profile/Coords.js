import React, { useState } from 'react'
import PropTypes from "prop-types";

export const Coords = ({profile}) => {
  const [show, setshow] = useState(false);

    function handleName (user) {
        alert (`Hello ${user}`)
    }
  return (
    <div>
      {show ? (
      <>
      <img src={`/img/${profile.image}`}/>
        <h2>{profile.fullName}</h2>
        <p className="job">{profile.profession}</p>
        <p className="bio">{profile.bio}</p>
        <button onClick={() => handleName(profile.fullName)}>Click Me !</button> 
      </>):(
      <>
        cliquer ici pour afficher le profil 
        <br></br>
      </>
      )}
        <button onClick={() => setshow((show) => !show)}>{show ? 'hide' : 'show'}</button> 

    </div>
  )
}

Coords.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string
  };