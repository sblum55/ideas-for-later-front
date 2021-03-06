import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContexts'
import { Link } from 'react-router-dom'
import axios from 'axios'


const MyIdeas = (props) => {
    const [ user ] = useContext(UserContext)
    const [ complete, setComplete ] = useState([])

    // Get all ideas that were marked as completed by user
    const fetchComplete = () => {
        // console.log(ideaId);
        axios.get(`${process.env.REACT_APP_BACKEND_URL}ideas/favorite/complete`, {
            headers: {
              Authorization: user
            }
          })
          .then((response) => {
            console.log('fetchComplete', response);
            setComplete(response.data.findInfo)
            return(response)
          })
    }

    //Function enable user to mark ideas as completed
    const completeIdea = (ideaId) => {
        // console.log(id);
        axios.put(`${process.env.REACT_APP_BACKEND_URL}ideas/favorite/${ideaId}`, {completed: true}, {
            headers: {
                Authorization: user
            }
        })
        .then((response) => {
            console.log('complete idea', response);
            return(response)
        })
        .then((response) => {
            props.updateAll()
            fetchComplete()
        })
    }

    useEffect(() => {
        fetchComplete()
        props.setCurrentPage('fav')
    }, [user])

    // maps thru array and checks if idea is completed to populate change
    const isComplete = (currentIdea) => {
        const index = []
        for ( let completes of complete){
            index.push(completes.ideaId)
            console.log('complete array', completes);
        }

        // console.log(index);

        if (index.includes(currentIdea)) {
            return true
        }
         return false
    }

    return (
        <div>
            <div className = 'welcomeArea'>
                <h1 className = 'myIdeasTitle'>Welcome Back to Your Ideas!</h1>
                    <div>
                        <Link to = '/addIdea'>
                            <button className = 'addIdeaBtn'>+</button>
                        </Link>
                    </div>
            </div>
            <div className = 'ideaContainer'>
                {props.results ? 
                    props.results && props.results.map((idea, index) => (
                        <div key = {index} className= 'ideaCard'>
                            <img className = 'ideaImg' src = {idea.image}></img>
                            <div className = 'descriptionContainer'>
                                <h3>{idea.title}</h3>
                                <p>{idea.description}</p>
                                {isComplete(idea.id) === true ?
                                <span>???</span>
                                :
                                <span className = 'filledHeart' onClick = {() => {completeIdea(idea.id); props.updateAll()}}>??????</span>
    
                                }
                            </div>
                        </div>
                    ))
                    :
                    props.ideaFav && props.ideaFav.map((idea, index) => (
                        <div key = {index} className= 'ideaCard'>
                            <img className = 'ideaImg' src = {idea.image}></img>
                            <div className = 'descriptionContainer'>
                                <h3>{idea.title}</h3>
                                <p>{idea.description}</p>
                                {isComplete(idea.id) === true ?
                                <span>???</span>
                                :
                                <span className = 'filledHeart' onClick = {() => {completeIdea(idea.id); props.updateAll()}}>??????</span>
    
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyIdeas