import './App.css';
import io from 'socket.io-client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EntryPage from './routes/entryPage';
import { UserContext } from './contexts/userContext'
import AuctionPage from './routes/auctionPage';
import { useEffect, useState } from 'react';
import { AuctionContext } from './contexts/auctionContext';


const socket = io.connect('http://localhost:3001');

function App() {

  const [error, setError] = useState('');

  socket.on('error', (errObj) => {
    const newErr = { msg: errObj.txt };
    setError(newErr.msg);
  })

  useEffect(() => {
    if (error !== '') alert(error);
    setError('');
  }, [error]);


  // authorisation
  const [connection, setConnection] = useState({
    socket,
    token: {},
  });

  // auction

  const [selectedItem, setSelectedItem] = useState({});
  const [timeHandle, setTimeHandle] = useState()

  return (
    <div className="App">
      <UserContext.Provider value={{ connection, setConnection }}>
        <AuctionContext.Provider value={{ selectedItem, setSelectedItem, timeHandle, setTimeHandle }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<EntryPage />} />
              <Route path='/auction' element={<AuctionPage />} />
            </Routes>
          </BrowserRouter>
        </AuctionContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
