import { useState } from 'react';
import { useAuth } from './security/Auth';
import { useNavigate  } from 'react-router-dom';
export default function Login(){
    const [username,setname]= useState('');
    const [password,setpassword]= useState('');
    const [loginFailed, setLoginFailed] = useState(false);
    const navigate = useNavigate();
    const  Authcontext = useAuth();
    function HandleButton(){
        if( Authcontext.Authentication(username,password)){
            navigate (`/welcome/${username}`)
        }
        else{
            Authcontext.setAuthenticationon(false);
            setLoginFailed(true);
        }

    }
    return(
        
        <div className= "LoginForm">
        
            <div>
            <label> UserName </label>
            <input type="text" name="UserName" value={username} onChange={(e)=>setname(e.target.value)}/>
            </div>
            <div>
            <label> Password </label>
            <input type="password" name="Password" value={password} onChange={(ep)=>setpassword(ep.target.value)}/>
            </div>
            <div>
                <button type="Submit" name="Login" onClick={HandleButton}>Login</button>
            </div>
            {loginFailed && <div className='NotAuthenticated' > Authetication is Failed Please check the credentials</div>}
        </div>
    )
}