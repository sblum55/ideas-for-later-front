import axios from 'axios'
import { useState, useEffect } from 'react'
import IdeaList from '../components/IdeaList'



const Home = (props) => {
    // console.log(props.isFav);
    
    // const [ fav, setFav ] = useState([])
    useEffect(() => {
        props.setCurrentPage('notFav')
    }, [])
    

    return (
        <div className = 'container'>
            <IdeaList ideas = {props.ideas} getIdeas = {props.getIdeas} isFav = {props.isFav} results = {props.results} updateAll = {props.updateAll} />
        </div>
    )
}

export default Home