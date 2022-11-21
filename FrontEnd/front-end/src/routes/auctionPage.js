import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LogoutBar from '../components/mainPageComponents/ToolBar';
import MainAuctionComponent from '../components/mainPageComponents/mainAuctionComponent';
import { UserContext } from '../contexts/userContext'

function AuctionPage() {

  const connObj = useContext(UserContext);
  const nav = useNavigate();
  const [compState, setCompState] = useState('list');

  useEffect(() => {
    if (connObj.connection.socket.id === undefined || connObj.connection.token.socket === undefined) nav('/')
  }, [connObj, nav]);

  return (
    <div>
      <LogoutBar compState={compState} setCompState={setCompState} />
      <MainAuctionComponent compState={compState} setCompState={setCompState} />
    </div>
  )
}

export default AuctionPage