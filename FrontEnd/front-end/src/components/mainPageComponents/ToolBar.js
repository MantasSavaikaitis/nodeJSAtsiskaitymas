import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';

function LogoutBar({ compState, setCompState }) {

  const connObj = useContext(UserContext);

  const nav = useNavigate();
  function logout() {
    connObj.connection.socket.emit('logout', connObj.connection.token)
    nav('/');
  }

  return (
    <div>
      <p>Loged in as: {connObj.connection.token.username}</p>
      <button onClick={logout}>log out</button>
      {compState === 'list' ? (<button onClick={() => setCompState('addListing')}>Add a Listing</button>) : (undefined)}
      {compState === 'addListing' || compState === 'singleItem' ? (<button onClick={() => setCompState('list')}>back to all listings</button>) : (undefined)}
    </div>
  )
}

export default LogoutBar