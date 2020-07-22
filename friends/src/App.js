import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import Login from './components/login'
import PrivateRoute from './components/privateRoute'
import FriendsList from './components/friendsList'
import AddFriend from './components/addFriend'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div>BFFs App</div>
        <NavLink to='/friends' >Friends</NavLink>
        <NavLink to='/addfriend'>Add Friend</NavLink>
      </header>
      <Route to='/' component={Login} />

      <PrivateRoute to='/friends' component={FriendsList} />
      <PrivateRoute to='/addfriend' component={AddFriend} />
    </div>
  );
}

export default App;
