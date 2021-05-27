import axios from 'axios'
import { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../contexts/UserContexts'

const Login = (props) => {
    const [ user, setUser ] = useContext(UserContext)
    const [ redirect, setRedirect ] = useState(null)

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    // Handle submit & post request for a user to log in
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}users/login`, {email, password})
        .then((response) => {
            console.log('login response', response);
            setUser(response.data.user.id)
            localStorage.setItem('userId', response.data.user.id)
            setRedirect('/')
            props.getIdeas()
        })
    }
    return (
        <div>
            <div className = 'loginFormContainer'>
                {redirect && <Redirect to = {redirect} />}
                <form onSubmit = {handleSubmit}>
                    <div className = 'loginTitle'>
                        <h1>Welcome to Ideas for Later!</h1>
                    </div>
                    <div className = 'emailArea'>
                        <input className = 'loginInput' placeholder = 'Email' id = 'new-email' value = {email} onChange = {(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div className = 'passwordArea'>
                        <input className = 'loginInput' placeholder = 'Password' type = 'password' id = 'new-password' value = {password} onChange = {(e) => {setPassword(e.target.value)}} />
                    </div>
                    <div className = 'loginFormBtnArea'>
                        <input className = 'submitLoginBtn' type = 'submit' value = 'SUBMIT' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login