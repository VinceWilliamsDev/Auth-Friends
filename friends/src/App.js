import React, {useState} from 'react';
import { Route, NavLink } from 'react-router-dom'
import Login from './components/login'
import PrivateRoute from './components/privateRoute'
import FriendsList from './components/friendsList'
import AddFriend from './components/addFriend'
import './App.css';

function App() {

  const [friends, setFriends] = useState([])
  
  return (
    <div className="App">
      <header>
        <div>BFFs App</div>
        <NavLink to='/friends' >Friends</NavLink>
        <NavLink to='/addfriend'>Add Friend</NavLink>
      </header>
      <Route exact path='/' component={Login} />

      <PrivateRoute path='/friends' >
        <FriendsList setFriends={setFriends} friends={friends} />
      </PrivateRoute>

      <PrivateRoute path='/addfriend' >
        <AddFriend setFriends={setFriends} />
      </PrivateRoute>
    </div>
  );
}

export default App;
