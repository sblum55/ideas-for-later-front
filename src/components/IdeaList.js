import { useState, useEffect } from 'react'

const IdeaList = (props) => {
    console.log(props.ideas);

    return (
        <div className= 'ideaContainer'>
           {props.ideas && props.ideas.map((idea, index) => (
            <div  key= {index} className = 'ideaCard'>
                <img className = 'ideaImg' src = {idea.image}></img>
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
            </div>))}
        </div>
    )
}

export default IdeaList