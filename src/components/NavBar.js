import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContexts'
import { Redirect } from 'react-router-dom'

const NavBar = (props) => {
    const [ user, setUser ] = useContext(UserContext)
    const [ searchTerm, setSearchTerm] = useState('')

    //filter for main ideas page
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        props.filterIdeas(e.target.value)
    }

    //filter for favIdeas page
    const handleChange2 = (e) => {
        setSearchTerm(e.target.value)
        props.filterFav(e.target.value)
    }

    //Enable page to reload with logged out state data(no fav'd ideas)
    const logout = async () => {
        localStorage.removeItem('userId')
        setUser(null)
        props.updateAll()
        window.location.reload()
    }
   
    return (
        <div className = 'navBar'>
            <div className = 'homeBtnArea'>
                <span className = 'homeBtn'>
                    <Link className = 'navLinkHome' to = '/' refresh = 'true'>
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
                    <Link className = 'navLink' to = '/ideas' refresh = 'true'>
                        My Ideas
                    </Link>
                </span>
                <span className = 'logOutBtn'>
                <span className = 'logOut' onClick = {() => {
                    logout()
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