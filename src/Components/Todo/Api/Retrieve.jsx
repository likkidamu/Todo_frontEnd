
import { apiClient } from "./Apiclients";
export const excuteBasicAuth=(token)=> apiClient('/basicAuth',{
    headers:{
        Authorization: token
    }
})
export const retrieveTodos=(name)=> apiClient(`/users/${name}/todos`);
export const deleteTodo=(name,id)=> apiClient.delete(`/users/${name}/todos/${id}`);
export const retrieveTodo=(name,id)=> apiClient(`/users/${name}/todos/${id}`);
export const UpdateTodo=(name,id,todo)=> apiClient.put(`/users/${name}/todos/${id}`,todo);
export const AddTodo=(name,todo)=> apiClient.post(`/users/${name}/todos`,todo);