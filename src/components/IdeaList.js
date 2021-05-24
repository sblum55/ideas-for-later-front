import { useContext } from 'react'
import { UserContext } from '../contexts/UserContexts'
import axios from 'axios'

const IdeaList = (props) => {
    const [ user ] = useContext(UserContext)
    // console.log(props.ideas);
    // console.log(props.fav);
    // console.log('fav props', props.favIdea);

    const favIdea = async (id) => {
        // console.log(id);
        axios.post(`${process.env.REACT_APP_BACKEND_URL}ideas/favorite`, {id: id}, {
            headers: {
                Authorization: user
            }
        })
        .then((response) => {
            console.log('post response home', response);
            // props.getIdeas()
            // setFav(response.data)
        })
    }

    return (
        <div className= 'ideaContainer'>
           {props.ideas && props.ideas.map((idea, index) => (
               <div  key= {index} className = 'ideaCard'>
                <img className = 'ideaImg' src = {idea.image}></img>
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
                <span className = 'favHeartOutline' onClick = {() => favIdea(idea.id)}>♡</span>
            </div>))}
        </div>
    )
}

export default IdeaList