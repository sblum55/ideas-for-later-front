import { useContext } from 'react'
import { UserContext } from '../contexts/UserContexts'
import axios from 'axios'

const IdeaList = (props) => {
    const [ user ] = useContext(UserContext)
    // console.log('idea list', user);
    // console.log(props.ideas);
    // console.log(props.fav);
    // console.log('fav props', props.favIdea);

    const favIdea = (id) => {
        // console.log(id);
        axios.post(`${process.env.REACT_APP_BACKEND_URL}ideas/favorite`, {id: id}, {
            headers: {
                Authorization: user
            }
        })
        .then((response) => {
            // console.log('post response home', response);
            props.getIdeas()
            return(response)
        })
        .then((response) => {
            props.updateAll()
        })
    }

    return (
        <div className= 'ideaContainer'>
            {props.results ?
                props.results && props.results.map((idea, index) => (
                    <div  key= {index} className = 'ideaCard'>
                     <img className = 'ideaImg' src = {idea.image}></img>
                     <div className = 'descriptionContainer'>
                         <h3>{idea.title}</h3>
                         <p>{idea.description}</p>
                         {props.isFav(idea.id) ?
                         <span>❤️</span>
                         :
                         <span className = 'favHeartOutline' onClick = {() => {favIdea(idea.id); props.updateAll()}}>♡</span>
                         
                         }
                     </div>
                 </div>))
                :
                props.ideas && props.ideas.map((idea, index) => (
                    <div  key= {index} className = 'ideaCard'>
                     <img className = 'ideaImg' src = {idea.image}></img>
                     <div className = 'descriptionContainer'>
                         <h3>{idea.title}</h3>
                         <p>{idea.description}</p>
                         {props.isFav(idea.id) ?
                         <span>❤️</span>
                         :
                         <span className = 'favHeartOutline' onClick = {() => {favIdea(idea.id); props.updateAll()}}>♡</span>
                         
                         }
                     </div>
                 </div>))
            }


           {/* {props.ideas && props.ideas.map((idea, index) => (
               <div  key= {index} className = 'ideaCard'>
                <img className = 'ideaImg' src = {idea.image}></img>
                <div className = 'descriptionContainer'>
                    <h3>{idea.title}</h3>
                    <p>{idea.description}</p>
                    {props.isFav(idea.id) ?
                    <span>❤️</span>
                    :
                    <span className = 'favHeartOutline' onClick = {() => favIdea(idea.id)}>♡</span>
                    
                    }
                </div>
            </div>))} */}
        </div>
    )
}

export default IdeaList