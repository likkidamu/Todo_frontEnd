import { useParams, Link} from 'react-router-dom'
export default function Welcome(){
    const {username}= useParams();
    return(
    <div className="welcomeComponent">
        <h1> Welcome to {username}</h1>
         <div>
         I always feel happy, You know why? Because I don't expect anything from anyone, Expectations always hurt.. Life is short, So love your life, Be happy.. & Keep smiling. Just live for yourself & Before you speak, Listen. Before you write, Think. Before you spend, Earn. Before you pray, Forgive. Before you hurt, Feel. Before you hate, Love. Before you quit, Try. Before you die, Live.
                To Open Your Todos <Link to = '/todos'> Click Here </Link>
         </div>
     </div>
    )
   

}