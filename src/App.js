import './App.css';
import { Route, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import userEvent from '@testing-library/user-event';

function App() {
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
