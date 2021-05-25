import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContexts'
import { Redirect } from 'react-router-dom'


const CreateIdea = (props) => {
    // const [ user, setUser ] = useContext(UserContext)
    const [user , setUser ] = useState({})
    const [ redirect, setRedirect ] = useState(null)
    // console.log(user);
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        const user = localStorage.getItem('userId')
        console.log('hit submit');
        e.preventDefault()

        axios.post(`${process.env.REACT_APP_BACKEND_URL}ideas/create`, {image, title, description}, {
            headers: {
                Authorization: user
            }
        })
        .then((response) => {
            console.log(response);
            setUser(response.data.user)
            setRedirect('/ideas')
            props.fetchFavIdeas()
        })
    }

    return (
        <div>
            <div className = 'addIdeaContainer'>
                {redirect && <Redirect to = {redirect} />}
                <form onSubmit = {handleSubmit}>
                    <div className = 'addIdeaTitle'>
                        <h1>Add Your Ideas!</h1>
                    </div>
                    <div className = 'imageArea'>
                        <input className = 'imageInput' placeholder = 'http://image.jpg' id = 'new-image' value = {image} onChange = {(e) => {setImage(e.target.value)}} />
                    </div>
                    <div className = 'titleArea'>
                        <input className = 'titleInput' placeholder = 'Your Idea' type = 'text' id = 'new-title' value = {title} onChange = {(e) => {setTitle(e.target.value)}} />
                    </div>
                    <div className = 'descriptionArea'>
                        <input className = 'descriptionInput' placeholder = 'Short Description' type = 'text' id = 'new-description' value = {description} onChange = {(e) => {setDescription(e.target.value)}} />
                    </div>
                    <div className = 'createBtnArea'>
                        <input className = 'createBtn' type = 'submit' value = 'SUBMIT' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateIdea