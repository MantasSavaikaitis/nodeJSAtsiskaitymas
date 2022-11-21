import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuctionContext } from '../../../contexts/auctionContext'
import { UserContext } from '../../../contexts/userContext';

function SingleItem({ compState, compSelect }) {

  const ItemConObj = useContext(AuctionContext);
  const connObj = useContext(UserContext);
  const bid = useRef();
  const [itemObj, setItemObj] = useState({})
  const timer = new Date(itemObj.auctionDuration);

  connObj.connection.socket.on('snglItemEmit', (item) => {
    setItemObj(item)
  })

  function attemptBid() {
    console.log(bid);
    connObj.connection.socket.emit('attemptBid', {
      id: ItemConObj.selectedItem,
      bidBy: connObj.connection.token.username,
      bidAmmount: Number(bid.current.value),
      bidDate: new Date(),
    });
    connObj.connection.socket.emit('reqSnglItem', ItemConObj.selectedItem);
  }

  function timerCalc() {
    return new Date(timer - (new Date(Date.now())));
  }

  if (itemObj.bidHistory) itemObj.bidHistory.sort((a, b) => b.bidAmmount - a.bidAmmount)

  useEffect(() => {
    connObj.connection.socket.emit('reqSnglItem', ItemConObj.selectedItem)
  }, [compState, connObj, ItemConObj])
  // , itemObj
  console.log('render');

  return (
    <div>
      <img src={itemObj.image} alt="" />
      <p>Title: {itemObj.title}</p>
      <p>Starting Price: {itemObj.startingPrice}</p>
      <p>Posted by: {itemObj.postedBy}</p>
      <p>Highest bid: {itemObj.currentBid}</p>
      <p>Time left:
        {timerCalc().getUTCDay()} days {timerCalc().getUTCHours()} h {(timerCalc().getUTCMinutes())} min
      </p>
      <div>
        {itemObj.bidHistory ? itemObj.bidHistory.map((x, i) => {
          return (
            <div className='singleBidHistory' key={i}>
              <p>Bid by: {x.bidBy}</p>
              <p>Bid Ammount: {x.bidAmmount} $</p>
              <p>Bid Date: {x.bidDate}</p>
            </div>
          )
        }) : (undefined)}
      </div>
      <div className='bidbox'>
        <input type="number" name="" id="" placeholder='Ammount to bid' ref={bid} min='0' />
        <button onClick={attemptBid}>Submit a bid</button>
      </div>
    </div>
  )
}

export default SingleItem