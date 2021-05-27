import axios from 'axios'
import { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../contexts/UserContexts'

const SignUp = (props) => {
    const [ user, setUser ] = useContext(UserContext)
    const [ redirect, setRedirect ] = useState(null)

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    //Handle submit & post request for user to sign up.
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}users`, {name, email, password})
        .then((response) => {
            console.log(('sign up response', response));
            setUser(response.data.user.id)
            localStorage.setItem('userId', response.data.user.id)
            setRedirect('/')
            props.getIdeas()
        })
    }

    return (
        <div className = 'signUpContainer'>
            {redirect && <Redirect to = {redirect} />}
            <form onSubmit = {handleSubmit}>
                <h1>Access our selection of great ideas!</h1>
                <div className = 'nameArea'>
                    <input className = 'signUpInput' placeholder = 'Name' id = 'new-name' value = {name} onChange = {(e) => {setName(e.target.value)}} />
                </div>
                <div className = 'emailArea'>
                    <input className = 'signUpInput' placeholder = 'Email' id = 'new-email' value = {email} onChange = {(e) => {setEmail(e.target.value)}} />
                </div>
                <div className = 'passwordArea'>
                    <input className = 'signUpInput' placeholder = 'Password' type = 'password' id = 'new-password' value = {password} onChange = {(e) => {setPassword(e.target.value)}} />
                </div>
                <div className = 'signUpFormBtnArea'>
                    <input className = 'signUpFormBtn' type = 'submit' value = 'SUBMIT' />
                </div>
            </form>
        </div>
    )
}

export default SignUp