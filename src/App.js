import './App.css';
import { Route, Redirect } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from './contexts/UserContexts'

import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'

function App() {
  const [ user, setUser ] = useContext(UserContext)


  return (
    <div className="App">
      <NavBar />

      <Route exact path = '/signup' render={() => {
        if (user.id) {
          return <Redirect to = '/'/>
        } else {
          return<SignUp />
        }
      }} />
      
    </div>
  );
}

export default App;
