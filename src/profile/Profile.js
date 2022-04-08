import React from 'react'
import PropTypes from 'prop-types'
import { Coords } from './Coords';

 const Profile = ({ profiles }) => {
 
  const styleItem = {padding:"2em 2em", maxWidth: "33.33%",textAlign:"center"}
  return (
    <>
        {profiles.map(el => (
          <div className="item" style={styleItem}>           
            <Coords profile={el}/>
          </div>
        )
        )}
    </>
  )
}

Profile.propTypes = {
    fullName: PropTypes.string
  };

  export default Profile;