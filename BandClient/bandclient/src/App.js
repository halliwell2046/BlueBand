import React, {useState, useEffect} from 'react';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth';
import BandIndex from './Bands/BandIndex';

function App() {
  const [sessionToken, setSessionToken] = useState('');

useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <BandIndex token={sessionToken}/>
  : <Auth updateToken={updateToken}/>)
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}
  return (
    <div className="App">
      <Sitebar clickLogout={clearToken}/>
      <Auth updateToken={updateToken}/>
      {protectedViews()}
    </div>
  );
}




export default App;
