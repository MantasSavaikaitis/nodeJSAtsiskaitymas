import React, { useContext, useEffect, useState } from 'react'
import { AuctionContext } from '../../../contexts/auctionContext';
import { UserContext } from '../../../contexts/userContext';

function List({ compState, compSelect }) {

  const [itemlist, setItemlist] = useState([]);
  const connObj = useContext(UserContext);
  console.log('renderin');
  connObj.connection.socket.on('listEmit', (itemArr) => setItemlist([...itemArr]));
  const itemSelect = useContext(AuctionContext);

  useEffect(() => {
    connObj.connection.socket.emit('listRequest');
    console.log('requesting');
  }, [compState, connObj])

  function selectSingleItem(id) {
    console.log('selecting', id);
    itemSelect.setSelectedItem(id);
    compSelect('singleItem');
  }

  function SingleCard({ item }) {
    return (
      <div className='listitem' onClick={() => selectSingleItem(item._id)}>
        <img src={item.image} alt="" />
        <p>Title: {item.title}</p>
        <p>Time: {item.time.UTC}</p>
        <p>Starting Price: {item.startingPrice}</p>
        <p>Current Bid: {item.currentBid}</p>
        <p>Posted by: {item.postedBy}</p>
      </div>
    );
  }

  return (
    <div className='flexlist'>{itemlist.map((x, i) => <SingleCard item={x} key={i} />)}</div>
  )
}

export default List