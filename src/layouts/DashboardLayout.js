import React, {useEffect} from 'react';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Footer from './common/Footer';

const DashboardLayout = (props) => {
    useEffect(function(){
        const list = document.querySelector('body').classList;
        if(list.contains("login-page")){
            list.remove("login-page");
        }
     },[]);

    return (
      <React.Fragment>
            <Header />
            <Sidebar />
            <main id="main" className="main">
               {props.children}
            </main>
            <Footer />
    </React.Fragment>
     );
};

export default DashboardLayout;