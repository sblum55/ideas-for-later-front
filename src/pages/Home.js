import axios from 'axios'
import { useState, useEffect } from 'react'
import IdeaList from '../components/IdeaList'



const Home = (props) => {
    // console.log(props.isFav);
    const [ideas, setIdeas] = useState([])
    // const [ fav, setFav ] = useState([])

    const getIdeas = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}ideas`)
        .then((response) => {
            // console.log('home response', response);
            setIdeas(response.data)

        })
    }

    useEffect(getIdeas, [])

    return (
        <div className = 'container'>
            <IdeaList ideas = {ideas} getIdeas = {getIdeas} isFav = {props.isFav} />
        </div>
    )
}

export default Home