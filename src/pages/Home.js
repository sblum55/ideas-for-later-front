import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {
    const [ideas, setIdeas] = useState([])
    const [ideasList, setIdeaList] = useState([])

    const getIdeas = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}ideas`)
        .then((response) => {
            console.log(response);
            setIdeas(response.data)

        })
    }

    useEffect(getIdeas, [])

    const getIdeaList = () => {
        const results = ideas.map(idea => (
            <div>
                <img src = {idea.image} ></img>
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
            </div>
        ))
        setIdeaList(results)
    }

    useEffect(getIdeaList, [])

    return (
        <div>
            {ideasList}
        </div>
    )
}

export default Home