import { createContext, useContext, useState } from "react";

export const Authcontext=createContext();
export const useAuth = () => useContext(Authcontext);
export default function Authprovider({children}){
    const [isAuthenticated,setAuthenticationon]=useState(false);
    const [username,setusername]=useState();
    function Authentication(username,password){
        if(username==='damu'&&password==='1234'){
            setAuthenticationon(true);
            setusername(username)
            return true;
        }
        else{
            setAuthenticationon(false);
            return false;
        }

    }
    function logout(){
        setAuthenticationon(false)
    }
    return(
        <Authcontext.Provider value={{isAuthenticated,username,setAuthenticationon,Authentication,logout}}>
            {children}
        </Authcontext.Provider>
    )
}