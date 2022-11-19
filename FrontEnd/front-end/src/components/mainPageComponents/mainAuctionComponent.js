import React, { useState } from 'react'
import AddListing from './auctionComps/addListing';
import List from './auctionComps/list';
import SingleItem from './auctionComps/singleItem';

function MainAuctionComponent() {

  const [compState, setCompState] = useState('list');

  function SelectComponent() {
    if (compState === 'list') return (<List compSelect={setCompState} />)
    else if (compState === 'singleItem') return (<SingleItem compSelect={setCompState} />)
    else if (compState === 'addListing') return (<AddListing compSelect={setCompState} />);
  }


  return (
    <div>
      {<SelectComponent />}
    </div>
  )
}

export default MainAuctionComponent