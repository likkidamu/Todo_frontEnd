
import {Routes,Route, BrowserRouter, Navigate} from 'react-router-dom'
import './Todo.css';
import Logout from './Logout';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Error from './Error';
import Todos from './Todos';
import Welcome from './Welcome';
import Authprovider, { useAuth } from './security/Auth';
import TodoComponent from './TodoComponent';
export default function Todo(){
    
    function AuthentiatedRoute({children}){
        const Authcontext = useAuth();
        if(Authcontext.isAuthenticated){
            return children;
        }
        return <Navigate to='/login' />
    }
    return(
        <div className= "Todo">
        <Authprovider>
                <BrowserRouter>
                <Header></Header>
                    <Routes>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/todos' element={
                                                    <AuthentiatedRoute>
                                                    <Todos/>
                                                    </AuthentiatedRoute>
                                                    }
                        />
                        <Route path='/todos/:id' element={
                                                    <AuthentiatedRoute>
                                                    <TodoComponent/>
                                                    </AuthentiatedRoute>
                                                    }
                        />
                        <Route path='/welcome/:username' element={
                                                                <AuthentiatedRoute>
                                                                <Welcome/>
                                                                </AuthentiatedRoute>
                                                                }
                        />
                         <Route path='/logout' element={
                                                        <AuthentiatedRoute>
                                                        <Logout/>
                                                        </AuthentiatedRoute>
                                                        }
                        />
                        <Route path='*' element={<Error/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
           
        </Authprovider>
        </div>
    )

}






