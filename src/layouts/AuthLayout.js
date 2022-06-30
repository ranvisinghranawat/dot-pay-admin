import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = () => {
    useEffect(function(){
       const list = document.querySelector('body').classList;
       if(!list.contains("login-page")){
           list.add("login-page");
       }
    },[]);

    return (
        
            <div className="login-logo">
                <Link to={"/"}><b>Admin</b>LTE</Link>
            </div>
     );
};

export default AuthLayout;