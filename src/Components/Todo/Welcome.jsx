import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { retrieve } from './Retrieve';
import { useAuth } from './security/Auth';

export default function Welcome() {
    const [message, setMessage] = useState("");
    const Authcontext = useAuth();
    function callRestApi() {
        retrieve( Authcontext.username)  
            .then((response) => {
                console.log(response);  
            })
            .catch((error) => errorResponse(error))
            .finally(() => console.log("cleanup"));
    }
    
    function successfullResponse(response) {
        console.log(response);  // Log the response to the console
        setMessage(response.data.message);  // Update the state with the response message
    }
    
    function errorResponse(error) {
        console.error(error);  // Log any error to the console
    }
    return (
        <div className="welcomeComponent">
            <h1> Welcome to {Authcontext.username}</h1>
            <div>
                I always feel happy, You know why? Because I don't expect anything from anyone, Expectations always hurt.. Life is short, So love your life, Be happy.. & Keep smiling. Just live for yourself & Before you speak, Listen. Before you write, Think. Before you spend, Earn. Before you pray, Forgive. Before you hurt, Feel. Before you hate, Love. Before you quit, Try. Before you die, Live.
                To Open Your Todos <Link to='/todos'>Click Here</Link>
            </div>
        </div>
    );
}
