import { useState } from 'react';
import { useAuth } from './security/Auth';
import { useNavigate  } from 'react-router-dom';
export default function Login(){
    const [username,setname]= useState('damu');
    const [password,setpassword]= useState('');
    const [loginFailed, setLoginFailed] = useState(false);
    const navigate = useNavigate();
    const  Authcontext = useAuth();
    async function HandleButton(){
        if( await Authcontext.Authentication(username,password)){
            navigate (`/welcome/${username}`)
        }
        else{
            Authcontext.setAuthenticationon(false);
            setLoginFailed(true);
        }

    }
    return(
        <div className="container">
            <h2> Enter Login Details</h2>
            <div className="LoginForm">
                <div className="mb-3">
                    <label> UserName </label>
                    <input type="text" name="UserName" value={username} onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label> Password </label>
                    <input type="password" name="Password" value={password} onChange={(ep)=>setpassword(ep.target.value)}/>
                </div>
                <div>
                    <button type="Submit" name="Login" onClick={HandleButton}>Login</button>
                </div>
                {loginFailed && <div className='NotAuthenticated' > Authetication is Failed Please check the credentials</div>}
            </div>
        </div>
    )
}