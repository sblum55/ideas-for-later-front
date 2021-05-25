import './App.css';
import { Route, Redirect } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from './contexts/UserContexts'
import axios from 'axios'

import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import MyIdeas from './pages/MyIdea'
import CreateIdea from './pages/CreateIdea'

function App() {
  const [ user ] = useContext(UserContext)
  const [ ideaFav, setIdeaFav ] = useState([])
  // console.log('app.js user', user);

  const fetchFavIdeas = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}ideas/favorite`, {
      headers: {
        Authorization: user
      }
    })
    .then((response) => {
      // console.log('app.js fav idea', response);
      setIdeaFav(response.data.favIdea)
    })
    
  }
  
  useEffect(() => {
    fetchFavIdeas()
  }, [user])

  const isFav = (currentIdea) => {
    const index = []
    for( let ideas of ideaFav){
      index.push(ideas.id)
      // console.log(ideas);
    }
    // console.log(index);
    if (index.includes(currentIdea)) {
      return true
    }
    return false
  }

  return (
    <div className="App">
      <NavBar />

      <Route exact path = '/'>
        <Home isFav = {isFav}  />
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
        <MyIdeas ideaFav = {ideaFav} />
      </Route>

      <Route exact path = '/addIdea'>
        <CreateIdea />
      </Route>
      
    </div>
  )
}

export default App;
