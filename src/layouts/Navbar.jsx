import React from 'react'
import PropTypes from "prop-types"

function Navbar(props) {
  
    const {title, gender} = props;
  return (
    <div>
        {title} + {gender}
    </div>
  )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    gender : PropTypes.string
}
Navbar.defaultProps = {
    title : "default Type"
}
export default Navbar;