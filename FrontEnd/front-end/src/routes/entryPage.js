import React, { useState } from 'react'
import EntryToolbar from '../components/entryComponents/entryToolbar'
import Login from '../components/entryComponents/login';
import Register from '../components/entryComponents/register';

function EntryPage() {

  const [isItLogin, setIsItLogin] = useState(true);

  return (
    <div>
      <EntryToolbar log={setIsItLogin} />
      <div className='entryFlex'>
        {isItLogin ? <Login /> : <Register setLogin={setIsItLogin} />}
      </div>
    </div>
  )
}

export default EntryPage