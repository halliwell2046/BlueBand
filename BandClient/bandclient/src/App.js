import React, {useState, useEffect} from 'react';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth';
import BandIndex from './Bands/BandIndex';
import MyFavorites from './favs/Fav';
import './App.css';
import {BrowserRouter as Router,
} from 'react-router-dom';



function App(props) {
  const [sessionToken, setSessionToken] = useState('');
  const [userId, setUserId] = useState();

useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (userData) => {
  localStorage.setItem('token', userData.sessionToken);
  setSessionToken(userData.sessionToken);
  let userId = userData.email ? userData.email.id : userData.user.id;
  setUserId(userId);
}

const clearToken = () => {
  localStorage.clear("token");
  setSessionToken('');
}

const protectedViews = () => {console.log(userId);
  return (sessionToken === localStorage.getItem('token') ? <BandIndex userId={userId} token={sessionToken}/>
  : <Auth updateToken={updateToken}/>)
}

const protectedFav = () => {console.log(userId);
  return (sessionToken === localStorage.getItem('token') ? <MyFavorites userId={userId} token={sessionToken}/>
  : <Auth updateToken={updateToken}/>)
}

  return (
    <div className="App">
      <Router>
      <Sitebar clickLogout={clearToken}/>
      </Router>
      {protectedViews()}
      {protectedFav()}
    </div>
  );
}




export default App;