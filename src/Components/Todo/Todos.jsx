import { useEffect, useState } from "react";
import { retrieveTodos } from "./Api/Retrieve";
import { deleteTodo } from "./Api/Retrieve";
import { useAuth } from "./security/Auth";
import { useNavigate } from "react-router-dom";
export default function Todos(){
     const [Todos1,setTodos]= useState([]);
     const [message, setMessage] = useState("");
     const Authcontext = useAuth();
     const navigate =useNavigate()
     useEffect(() => {
        refreshTodos();
    }, []); 
    function refreshTodos(){
        retrieveTodos(Authcontext.username)  
            .then((response) => {
                setTodos(response.data);  
            })
            .catch((error) =>{
                console.error(error);  
            })
            .finally(() => console.log("cleanup"));
    } 
    function callDelete(id){
      deleteTodo(Authcontext.username,id)
        .then(() => 
            {
                setMessage(` Todo with ${id} got deleted `)
                refreshTodos()
            }
            )
        .catch((error) =>
            {console.error(error);}
            )
        .finally(() => console.log("cleanup"));
    } 
    function handleUpdate(id){
        navigate(`/todos/${id}`)
    }
    function handleAdd(){
        console.log("came into Add")
        navigate(`/todos/-1`)
    }
    return (
        <div className="container">
        <h1>TASK MANAGER</h1>
        <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Done</th>
                        <th>Target Date</th>
                        <th>Actions</th> 
                        <th>Update</th> {/* Add an Actions column */}
                    </tr>
                </thead>
                <tbody>
                    {Todos1.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td><td>{todo.description}</td><td>{todo.done.toString()}</td><td>{todo.targetDate}</td>
                            <td>
                                <button 
                                    className="btn btn-danger btn-sm"
                                    onClick={() => callDelete(todo.id)}>
                                    Delete
                                </button>
                            </td>
                            <td>
                                <button 
                                    className="btn btn-success btn-sm" onClick={()=>{handleUpdate(todo.id)}}>
                                    update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button 
                className="btn btn-success btn-sm" onClick={()=>{handleAdd()}}>
                Add
            </button>
           {message&&<div className="alert alert-warning">{message}</div>} 
        </div>
    </div> 
    );
}