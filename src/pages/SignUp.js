import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContexts'

const SignUp = () => {
    const [ setUser ] = useContext(UserContext)

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}users`, {name, email, password})
        .then((response) => {
            // console.log(('sign up response', response));
            setUser(response.data.user.id)
            localStorage.setItem('userId', response.data.user.id)
        })
    }

    return (
        <div className = 'signUpContainer'>
            <h1>Access our selection of great ideas!</h1>
            <form onSubmit = {handleSubmit}>
                <div className = 'nameArea'>
                    <input className = 'signUpInput' placeholder = 'Name' id = 'new-name' value = {name} onChange = {(e) => {setName(e.target.value)}} />
                </div>
                <div className = 'emailArea'>
                    <input className = 'signUpInput' placeholder = 'Email' id = 'new-email' value = {email} onChange = {(e) => {setEmail(e.target.value)}} />
                </div>
                <div className = 'passwordArea'>
                    <input className = 'signUpInput' placeholder = 'Password' type = 'password' id = 'new-password' value = {password} onChange = {(e) => {setPassword(e.target.value)}} />
                </div>
                <div className = 'signUpBtnArea'>
                    <input className = 'signUpBtn' type = 'submit' value = 'SUBMIT' />
                </div>
            </form>
        </div>
    )
}

export default SignUp