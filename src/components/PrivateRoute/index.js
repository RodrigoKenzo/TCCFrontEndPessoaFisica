import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { useLogin } from '../../contexts/loginContext'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isLoggedIn } = useLogin()
  console.log('isLoggedIn - private route', isLoggedIn)
  if (!isLoggedIn && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app`)
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute