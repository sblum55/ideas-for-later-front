import axios from 'axios'
import { useState, useEffect } from 'react'
import IdeaList from '../components/IdeaList'

const Home = () => {
    const [ideas, setIdeas] = useState([])

    const getIdeas = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}ideas`)
        .then((response) => {
            console.log('home response', response);
            setIdeas(response.data)

        })
    }

    useEffect(getIdeas, [])

    return (
        <div className = 'ideaContainer'>
            <IdeaList ideas = {ideas} />
        </div>
    )
}

export default Home