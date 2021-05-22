import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {
    const [ideas, setIdeas] = useState([])

    const getIdeas = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}ideas`)
        .then((response) => {
            console.log(response);
            setIdeas(response.data)

        })
    }

    useEffect(getIdeas, [])

    return (
        <div>
            Home Screen Area
        </div>
    )
}

export default Home