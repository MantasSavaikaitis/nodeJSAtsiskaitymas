import './App.css';
import io from 'socket.io-client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EntryPage from './routes/entryPage';
import { UserContext } from './userContext'
import AuctionPage from './routes/auctionPage';
import { useEffect, useState } from 'react';


const socket = io.connect('http://localhost:3001');

function App() {

  const [connection, setConnection] = useState({
    socket,
    token: {},
  });

  useEffect(() => {
    console.log(connection);
  }, [connection])

  return (
    <div className="App">
      <UserContext.Provider value={{ connection, setConnection }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<EntryPage />} />
            <Route path='/auction' element={<AuctionPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
