import './App.css';
import { Route, Redirect } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from './contexts/UserContexts'

import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  const [ user, setUser ] = useContext(UserContext)


  return (
    <div className="App">
      <NavBar />

      <Route exact path = '/'>
        <Home />
      </Route>

      <Route exact path = '/signup' render={() => {
        if (user.id) {
          return <Redirect to = '/'/>
        } else {
          return<SignUp />
        }
      }} />

      <Route exact path = '/login' render={() => {
        if (user.id) {
          return <Redirect to = '/'/>
        } else {
          return<Login />
        }
      }} />
      
    </div>
  );
}

export default App;
