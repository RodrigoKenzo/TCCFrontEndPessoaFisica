import React from 'react';
import Login from '../Login'
import Modal from '../Modal'
import { Link } from 'gatsby'
import { useLogin } from '../../contexts/loginContext';

const UserNotFound = () => {

  const { isLoggedIn } = useLogin()

  if(!isLoggedIn) {
    return (
      <div className="user-not-found__container">
        <span className="user-not-found__text">
          <p>Faça login para continuar</p>
        </span>
        <div className="user-not-found__button-wrapper">
          <div className="user-not-found__button">
            <Modal content={<Login />}/>
          </div>
          <div className="user-not-found__button">
            <Link type="submit" to="/register"></Link>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default UserNotFound
