import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContexts'
import axios from 'axios'


const MyIdeas = (props) => {
    const [ user ] = useContext(UserContext)
    console.log('my ideas', user);
    // const [ complete, setComplete ] = useState(null)

    const completeIdea = (ideaId) => {
        // console.log(id);
        axios.put(`${process.env.REACT_APP_BACKEND_URL}ideas/favorite/${ideaId}`, {completed: true}, {
            headers: {
                Authorization: user
            }
        })
        .then((response) => {
            console.log('complete idea', response);
            // setComplete(true)
        })
    }

    return (
        <div>
            <div>
                <h1 className = 'myIdeasTitle'>Welcome Back to Your Ideas!</h1>
            </div>
            <div className = 'ideaContainer'>
                {props.ideaFav && props.ideaFav.map((idea, index) => (
                    <div key = {index} className= 'ideaCard'>
                        <img className = 'ideaImg' src = {idea.image}></img>
                        <div className = 'descriptionContainer'>
                            <h3>{idea.title}</h3>
                            <p>{idea.description}</p>
                            <span className = 'favHeartOutline' onClick = {() => completeIdea(idea.id)}>❤️</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyIdeas