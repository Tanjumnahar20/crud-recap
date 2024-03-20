/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


// loading hoye user null howa off krte pvt route making

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if(loading){
       return <progress className="progress w-56"></progress>
    }

    if(user?.email){
     return children;
    }
    


    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;