import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "./security/Auth";
import { AddTodo, retrieveTodo, UpdateTodo } from "./Api/Retrieve"
import { useEffect, useState } from "react";
import { Formik,Form, Field, ErrorMessage} from "formik";
export default function TodoComponent(){
    const {id}=useParams()
    const Authcontext = useAuth();
    const navigate = useNavigate();
    const [description,setDescription]= useState("");
    const [targetDate,settargetDate]= useState("");
    useEffect(() => {
        retrieveTodoForUpdate();
    }, [id]);
    function retrieveTodoForUpdate(){
        if(id!=-1){
        retrieveTodo( Authcontext.username,id)  
            .then((response) => {
                setDescription(response.data.description); 
                settargetDate(response.data.targetDate);
            })
            .catch((error) =>{
                console.error(error);  
            })
            .finally(() => console.log("cleanup"));
        }

    }
    function onsubmit(values){
        setDescription(values.description); 
        settargetDate(values.targetDate);
        const todo ={
            id:id,
            username: Authcontext.username,
            description:values.description,
            targetDate:values.targetDate
        }
        if(id!=-1){
        UpdateTodo(Authcontext.username,id,todo)
            .then((response) => {
                console.log("in Update")
                console.log(response)
                navigate('/todos')
            })
            .catch((error) =>{
                console.error(error);  
            })
            .finally(() => console.log("cleanup"));
        }
        if(id==-1){
        AddTodo(Authcontext.username,todo)
            .then((response) => {
                console.log(response)
                navigate('/todos')
            })
            .catch((error) =>{
                console.error(error);  
            })
            .finally(() => console.log("cleanup"));
        }
    }
    function onValid(values){
        let errors = {};
                if (!values.description) {
                    errors.description = 'Description is required';
                } else if (values.description.length < 5) {
                    errors.description = 'Enter a valid description (at least 5 characters)';
                }

                // Validate targetDate
                if (!values.targetDate) {
                    errors.targetDate = 'Target Date is required';
                } else {
                    const selectedDate = new Date(values.targetDate);
                    const today = new Date();
                    if (selectedDate < today) {
                    errors.targetDate = 'Enter a valid Target Date (cannot be in the past)';
                    }
  }

  return errors;
    }

    return(
        <div className="container">
            
            <h1>This is to do Component</h1>
            <Formik initialValues={{ description, targetDate }} 
                enableReinitialize={true}
                onSubmit={onsubmit}
                validate={onValid}>
                {(props) => (
                        <Form>
                           
                            <fieldset className="form-group">
                                <label> Description</label>
                                <Field type="text" className="form-control" name="description"/>
                                <ErrorMessage
                                name="description"
                                component="div"
                                className="alert alert-warning"
                            />
                            </fieldset>
                            <fieldset className="form-group">
                                <label> Target Date</label>
                                <Field type="date" className="form-control" name="targetDate"/>
                                <ErrorMessage
                                name="targetDate"
                                component="div"
                                className="alert alert-warning"
                                />
                            </fieldset>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Form>
                    )
                 }
            </Formik>

        </div>
    )
}