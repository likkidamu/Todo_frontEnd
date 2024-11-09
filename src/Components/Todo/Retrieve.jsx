import axios from "axios"
const apiClient = axios.create(
    {
    baseURL:'http://localhost:8080'
    }

);
export const retrieve=(name)=> apiClient(`/hello-world/path-variable/${name}`);
export const retrieveTodos=(name)=> apiClient(`/users/${name}/todos`);
// export const retrieveTodoById=(name)=> apiClient(`/users/${name}/todos/${id}`);
export const deleteTodo=(name,id)=> apiClient.delete(`/users/${name}/todos/${id}`);
export const retrieveTodo=(name,id)=> apiClient(`/users/${name}/todos/${id}`);
export const UpdateTodo=(name,id,todo)=> apiClient.put(`/users/${name}/todos/${id}`,todo);
export const AddTodo=(name,todo)=> apiClient.post(`/users/${name}/todos`,todo);