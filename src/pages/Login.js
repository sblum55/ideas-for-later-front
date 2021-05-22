import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContexts'

const Login = () => {
    const [ user, setUser ] = useContext(UserContext)

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}users/login`, {email, password})
        .then((response) => {
            console.log('login response', response);
            setUser(response.data.user.id)
            localStorage.setItem('userId', response.data.user.id)
        })
    }
    return (
        <div>
            <h1>Log in for all your ideas and more!</h1>
            <form onSubmit = {handleSubmit}>
                <div className = 'emailArea'>
                    <div>
                    <label htmlFor = 'new-email'>Email </label>
                    </div>
                    <input className = 'loginInput' id = 'new-email' value = {email} onChange = {(e) => {setEmail(e.target.value)}} />
                </div>
                <div className = 'passwordArea'>
                    <div>
                    <label htmlFor = 'new-password'>Password </label>
                    </div>
                    <input className = 'loginInput' type = 'password' id = 'new-password' value = {password} onChange = {(e) => {setPassword(e.target.value)}} />
                </div>
                <div className = 'signUpBtnArea'>
                    <input className = 'loginBtn' type = 'submit' value = 'SUBMIT' />
                </div>
            </form>
        </div>
    )
}

export default Login