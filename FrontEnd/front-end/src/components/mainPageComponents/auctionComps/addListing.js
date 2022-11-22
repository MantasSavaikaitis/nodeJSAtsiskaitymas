import React, { useContext, useRef } from 'react'
import { UserContext } from '../../../contexts/userContext';

function AddListing() {

  const connObj = useContext(UserContext);

  const title = useRef(null);
  const initPrice = useRef(null);
  const imgLink = useRef(null);
  const auctionDuration = useRef(null);
  // 60 * Number(auctionDuration.current.value
  function submitForm() {
    const endDate = new Date();
    console.log('Date');
    connObj.connection.socket.emit('listingSubmit', {
      title: title.current.value,
      startingPrice: initPrice.current.value,
      status: true,
      time: new Date(),
      currentBid: Number(initPrice.current.value),
      auctionDuration: (new Date(endDate.setHours(endDate.getHours() + Number(auctionDuration.current.value)))),
      image: imgLink.current.value,
      postedBy: connObj.connection.token.username,
    })
  }

  return (
    <div className='entryFlex'>
      <div className='loginBox'>
        <input type="text" name="" id="" ref={title} placeholder='Title' />
        <input type="number" name="" id="" ref={initPrice} placeholder='Starting Price' />
        <input type="text" name="" id="" ref={imgLink} placeholder='image link' />
        <select name="" id="" ref={auctionDuration}>
          <option value="1">1 hour</option>
          <option value="24">1 day</option>
          <option value="168">1 week</option>
        </select>
        <button onClick={submitForm}>submit</button>
      </div>
    </div>
  )
}

export default AddListing