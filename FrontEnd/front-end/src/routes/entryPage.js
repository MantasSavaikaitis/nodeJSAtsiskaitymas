import React, { useState } from 'react'
import EntryToolbar from '../components/entryComponents/entryToolbar'
import Login from '../components/entryComponents/login';
import Register from '../components/entryComponents/register';

function EntryPage() {

  const [isItLogin, setIsItLogin] = useState(true);

  return (
    <div>
      <EntryToolbar log={setIsItLogin} />
      {isItLogin ? <Login /> : <Register />}
    </div>
  )
}

export default EntryPage