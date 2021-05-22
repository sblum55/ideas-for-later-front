import { useState, useEffect } from 'react'

const IdeaList = (props) => {
    const [ideasList, setIdeaList] = useState([])

    const getIdeaList = () => {
        const results = props.ideas.map((idea, index) => (
            <div  key= {index} className = 'ideaCard'>
                <img src = {idea.image}></img>
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
            </div>
        ))
        console.log('idea list results', results);
        setIdeaList(results)
    }

    useEffect(getIdeaList, [])
    console.log('get idea list', ideasList);

    return (
        <div>
            {ideasList}
        </div>
    )
}

export default IdeaList