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
  // console.log('app.js user', user);
  


  return (
    <div className="App">
      <NavBar />

      <Route exact path = '/'>
        <Home />
      </Route>

      <Route exact path = '/signup' render={() => {
        if (user) {
          return <Redirect to = '/'/>
        } else {
          return<SignUp />
        }
      }} />

      {/* <Route exact path= '/signup'>
        <SignUp />
      </Route> */}

      <Route exact path = '/login' render={() => {
        if (user) {
          return <Redirect to = '/'/>
        } else {
          return <Login />
        }
      }} />
      {/* <Route exact path = '/login'>
         <Login />
      </Route> */}
      
    </div>
  )
}

export default App;
