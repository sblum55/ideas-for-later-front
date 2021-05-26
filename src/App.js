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
  const [currentPage, setCurrentPage] = useState(null)
  const [ideas, setIdeas] = useState([])
  const [ results, setResults] = useState('')
  // console.log('app.js user', user);

  const getIdeas = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}ideas`)
    .then((response) => {
        // console.log('home response', response);
        setIdeas(response.data)

    })
  }

  useEffect(() => {
      getIdeas()
      fetchFavIdeas()
  }, [])

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

  const filterIdeas = (str) => {
    const response = ideas.filter((idea) => {
      return idea.title.toLowerCase().includes(str)
    })
    setResults(response)
  }

  const filterFav = (str) => {
    const response = ideaFav.filter((idea) => {
      return idea.title.toLowerCase().includes(str)
    })
    setResults(response)
  }

  const updateAll = () => {
    console.log('updated');
    getIdeas()
    fetchFavIdeas()
  }

  return (
    <div className="App">
      <NavBar currentPage = {currentPage} filterIdeas = {filterIdeas} filterFav = {filterFav} updateAll = {updateAll} />

      <Route exact path = '/'>
        <Home isFav = {isFav} setCurrentPage = {setCurrentPage} ideas = {ideas} results = {results} getIdeas = {getIdeas} updateAll = {updateAll}  />
      </Route>

      <Route exact path = '/signup' render={() => {
        if (user) {
          return <Redirect to = '/'/>
        } else {
          return<SignUp getIdeas = {getIdeas} />
        }
      }} />

      {/* <Route exact path= '/signup'>
        <SignUp />
      </Route> */}

      <Route exact path = '/login' render={() => {
        if (user) {
          return <Redirect to = '/'/>
        } else {
          return <Login getIdeas = {getIdeas} />
        }
      }} />
      {/* <Route exact path = '/login'>
         <Login />
      </Route> */}

      <Route exact path = '/ideas'>
        <MyIdeas ideaFav = {ideaFav} setCurrentPage = {setCurrentPage} results = {results} updateAll = {updateAll} />
      </Route>

      <Route exact path = '/addIdea'>
        <CreateIdea fetchFavIdeas = {fetchFavIdeas} />
      </Route>
      
    </div>
  )
}

export default App;
