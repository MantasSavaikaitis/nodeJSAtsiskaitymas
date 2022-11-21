import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';

function Login() {

  const connObj = useContext(UserContext);
  const socket = connObj.connection.socket;
  const nav = useNavigate();
  const username = useRef();
  const password = useRef();

  function loginAtempt() {
    socket.emit('login', { username: username.current.value, password: password.current.value });
    socket.on('logged', (token) => {
      connObj.setConnection({
        socket,
        token,
      });
      connObj.connection.socket.emit('listRequest');
      nav('/auction');
    });
  }
  return (
    <div className='loginBox'>
      <input type="text" placeholder='Username' ref={username} />
      <input type="password" placeholder='Password' ref={password} />
      <button onClick={loginAtempt}>Login</button>
    </div>
  )
}

export default Login