import React, { useContext } from 'react'
import LogoutBar from '../components/mainPageComponents/logoutBar';
import MainAuctionComponent from '../components/mainPageComponents/mainAuctionComponent';
import { UserContext } from '../userContext'

function AuctionPage() {

  const connObj = useContext(UserContext);

  return (
    <div>
      <LogoutBar connObj={connObj} />
      <MainAuctionComponent />
    </div>
  )
}

export default AuctionPage