import React from 'react';
import { useLogin } from '../../contexts/loginContext';
import './styles.scss'

const UserNotFound = () => {

  const { isLoggedIn } = useLogin()

  if(!isLoggedIn) {
    return (
      <div className="user-not-found__container">
        <span className="user-not-found__text">
          <p>Faça login para realizar sua ocorrência</p>
        </span>
      </div>
    )
  } else {
    return null
  }
}

export default UserNotFound
