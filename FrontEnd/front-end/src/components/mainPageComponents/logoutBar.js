import React from 'react'
import { useNavigate } from 'react-router-dom';

function LogoutBar({ connObj }) {

  const nav = useNavigate();

  function logout() {
    connObj.connection.socket.emit('logout', connObj.connection.token)
    nav('/');
  }

  return (
    <div>
      <button onClick={logout}>log out</button>
    </div>
  )
}

export default LogoutBar