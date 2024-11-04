import {Link} from 'react-router-dom'
import { useAuth } from './security/Auth'

export default function Header(){
    const Authcontext = useAuth();
    console.log(Authcontext.isAuthenticated)
    function logout(){
        Authcontext.logout()
    }
    return(
    <header className="HeaderComponent"> 
        <div className="container">
            <div className='row'> 
                <nav className='navbar navbar-expand-lg'>  
                <div className='collapse navbar-collapse'>
                    <ul className="navbar-nav">
                     {Authcontext.isAuthenticated && <li className="nav-item"><Link className="nav-link" to='/welcome/:username'>Home</Link></li>} 
                     {Authcontext.isAuthenticated && <li className="nav-item"><Link className="nav-link" to='/todos'>Todos</Link></li>}
                    </ul>
                </div>
                <div>
                <ul className="navbar-nav">
                    {!Authcontext.isAuthenticated && <li className="nav-item"><Link className="nav-link" to='/login'>Login</Link></li>}
                    {Authcontext.isAuthenticated && <li className="nav-item"><Link className="nav-link" to='/logout' onClick={logout}>Logout</Link></li>}
                </ul>
                </div>
                </nav>
            </div> 
        </div>
    </header >
    )

}