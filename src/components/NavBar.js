import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContexts'

const NavBar = () => {
    const [ user, setUser ] = useContext(UserContext)
    // const { userState } = useContext(UserContext)
    // const [ user, setUser] = userState
    // console.log(user);
    return (
        <div className = 'navBar'>
            <div className = 'homeBtnArea'>
                <span className = 'homeBtn'>
                    <Link className = 'navLinkHome' to = '/'>
                        Ideas For Later
                    </Link>
                </span>
            </div>
            <div>
                <span className = 'searchBarArea'>
                    <input className = 'ideaSearchBar' aria-label = 'Search icon' type = 'Search' placeholder = 'Search' />
                </span>
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