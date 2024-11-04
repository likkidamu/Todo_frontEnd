import { createContext, useContext, useState } from "react";

export const Authcontext=createContext();
export const useAuth = () => useContext(Authcontext);
export default function Authprovider({children}){
    const [isAuthenticated,setAuthenticationon]=useState(false);
    function Authentication(username,password){
        if(username==='damu'&&password==='1234'){
            setAuthenticationon(true);
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
        <Authcontext.Provider value={{isAuthenticated,setAuthenticationon,Authentication,logout}}>
            {children}
        </Authcontext.Provider>
    )
}