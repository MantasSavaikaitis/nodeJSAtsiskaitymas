import React from 'react'
import AddListing from './auctionComps/addListing';
import List from './auctionComps/list';
import SingleItem from './auctionComps/singleItem';

function MainAuctionComponent({ compState, setCompState }) {

  function SelectComponent() {
    if (compState === 'list') return (<List compState={compState} compSelect={setCompState} />)
    else if (compState === 'singleItem') return (<SingleItem compSelect={setCompState} />)
    else if (compState === 'addListing') return (<AddListing compState={compState} compSelect={setCompState} />);
  }


  return (
    <div>
      {<SelectComponent compState={compState} setCompState={setCompState} />}
    </div>
  )
}

export default MainAuctionComponent