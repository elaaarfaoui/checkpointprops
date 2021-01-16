import React from 'react'
import PropTypes from "proptype"

const Profile = ({ props, children, handleClick }) => {
    // console.log("prps",props)
    // console.log("children",children)
        return (
        <div>
          <h2 > {props.fullname} </h2>  
          <h2> {props.bio} </h2>
          <h2> {props.profession} </h2>
          <div className="profilepic"> 
          {children}
          </div>
          <button type="button" class="btn btn-dark"onClick={() => handleClick(props.fullname)}>My name</button>


        </div>
    )
}

export default Profile

Profile.propTypes = {
fullname: PropTypes.sting,
bio: PropTypes.sting,
profession:PropTypes.sting,
img:PropTypes.sting,
}
