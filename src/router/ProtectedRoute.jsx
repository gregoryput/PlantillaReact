import {useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";


const ProtectedRoute = ({ children, roles }) => {
    // const token = localStorage.getItem("token");
    // const userRol = getRolesByToken(token);
    let rol = "Administrador";
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (!roles.includes(rol)) {
            return navigate('/Login');
        }

        if (location.pathname == "/"){
            return navigate('/home');

        }

    }, [])
    
    return children;
};

export default ProtectedRoute;