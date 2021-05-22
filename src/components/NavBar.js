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
                    <Link className = 'navLink' to = '/'>
                        HOME
                    </Link>
                </span>
            </div>
            {user ? <>
            <span className = 'myIdea'>
                <Link className = 'navLink' to = '/ideas'>
                    My Ideas
                </Link>
            </span>
            <span className = 'deleteBtn'>
            <span className = 'delete' onClick = {() => {
                localStorage.removeItem('userId')
                props.setUser({})
            }}>LOGOUT</span>
            </span>
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