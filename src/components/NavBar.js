import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContexts'

const NavBar = (props) => {
    const [ user, setUser ] = useContext(UserContext)
    // console.log(props);
    return (
        <div className = 'navBar'>
            <div className = 'homeBtnArea'>
                <span className = 'homeBtn'>
                    <Link className = 'navLinkHome' to = '/'>
                        Ideas For Later
                    </Link>
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
                    props.setUser({})
                }}>Logout</span>
                </span>
            </div>
            </>
             :
             <>
            <Link className = 'navLink' to = '/signup'>
                SIGN UP
            </Link>{ ' | '}
            <Link className = 'navLink' to = '/login'>
                LOGIN
            </Link>
             </>
            
         }
        </div>
    )
}

export default NavBar;