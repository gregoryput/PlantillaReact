import {useEffect} from "react";
import { useNavigate } from "react-router-dom";


const ProtectedRoute = ({ children, roles }) => {
    const token = localStorage.getItem("token");
    // const userRol = getRolesByToken(token);

    const navigate = useNavigate();
    
    useEffect(() => {
        if (token !=null) {
            return navigate('/Login');
        }

    }, [])
    
    return children;
};

export default ProtectedRoute;