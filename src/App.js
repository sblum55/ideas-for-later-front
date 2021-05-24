import './App.css';
import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './contexts/UserContexts'

import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import MyIdeas from './pages/MyIdea'

function App() {
  const [ user ] = useContext(UserContext)
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

      <Route exact path = '/ideas'>
        <MyIdeas />
      </Route>
      
    </div>
  )
}

export default App;
