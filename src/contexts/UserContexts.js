import { useEffect, useState, createContext } from 'react'
import axios from 'axios'

const UserContext = createContext()

const UserProvider = (props) => {
    const [user, setUser] = useState(null)

    const fetchUser = (name) => {
        console.log(name);
        if (!localStorage.getItem('userId')) {return}
        
        axios.get(`${process.env.REACT_APP_BACKEND_URL}users/verify`,{
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        }) .then((response) => {
            console.log('useContext', response);
            setUser(response.data.user)
        })
    }
    // console.log('user context user', user);

    useEffect(fetchUser, [])

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }