import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContexts'

const NavBar = (props) => {
    const [ user, setUser ] = useContext(UserContext)
    const [ searchTerm, setSearchTerm] = useState('')

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        props.filterIdeas(e.target.value)
    }

    const handleChange2 = (e) => {
        setSearchTerm(e.target.value)
        props.filterFav(e.target.value)
    }
   
    return (
        <div className = 'navBar'>
            <div className = 'homeBtnArea'>
                <span className = 'homeBtn'>
                    <Link className = 'navLinkHome' to = '/'>
                        Ideas For Later
                    </Link>
                </span>
            </div>
            <div className = 'searchBarArea'>
                    <input className = 'ideaSearchBar' aria-label = 'Search icon' type = 'Search' placeholder = 'Search' onChange = {(e)=> {props.currentPage === 'fav' ? handleChange2(e) :handleChange(e)}} />
            </div>
            {user ? <>
            <div className = 'rightNavArea'>
                <span className = 'myIdea'>
                    <Link className = 'navLink' to = '/ideas'>
                        My Ideas
                    </Link>
                </span>
                <span className = 'logOutBtn'>
                <span className = 'logOut' onClick = {() => {
                    localStorage.removeItem('userId')
                    setUser(null)
                }}>Logout</span>
                </span>
            </div>
            </>
             :
             <>
             <div className = 'rightNavArea'>
                 <span className = 'signUpBtn'>
                    <Link className = 'navLink' to = '/signup'>
                        SIGN UP
                    </Link>   
                 </span>
                 <span className= 'loginBtn'>
                    <Link className = 'navLink' to = '/login'>
                        LOGIN
                    </Link>
                 </span>
             </div>
             </>
            
         }
        </div>
    )
}

export default NavBar;