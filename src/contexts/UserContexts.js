import { useEffect, useState, createContext } from 'react'
import axios from 'axios'

const UserContext = createContext()

const UserProvider = (props) => {
    const [user, setUser] = useState({})

    const fetchUser = () => {
        if (!localStorage.getItem('userId')) {return}

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/verify`, {
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        }) .then((response) => {
            console.log(response);
            setUser(response.data.user)
        })
    }

    useEffect(fetchUser, [])

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }