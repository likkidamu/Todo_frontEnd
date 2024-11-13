import { createContext, useContext, useState } from "react";
import { excuteBasicAuth } from "../Api/Retrieve";
import { apiClient } from "../Api/Apiclients";
export const Authcontext=createContext();
export const useAuth = () => useContext(Authcontext);
export default function Authprovider({children}){
    const [isAuthenticated,setAuthenticationon]=useState(false);
    const [username,setusername]=useState();
    const [token ,setToken ]=useState();
    async function Authentication(username,password){

        const AuthToken = 'Basic ' + window.btoa(username +':'+ password);
        try{
            const response = await excuteBasicAuth(AuthToken);
            if(response.status==200){
                setAuthenticationon(true);
                setusername(username)
                setToken(AuthToken)
                apiClient.interceptors.request.use(
                    (config)=>{
                        config.headers.Authorization=AuthToken
                        return config
                    }
                )
                return true;
            }
            else{
                logout()
                return false;
        }
        }catch(error){
            logout()
            return false;
        }

    }
    function logout(){
        setAuthenticationon(false);
        setusername(null)
        setToken(null)
    }
    return(
        <Authcontext.Provider value={{isAuthenticated,username,token,setAuthenticationon,Authentication,logout,}}>
            {children}
        </Authcontext.Provider>
    )
}