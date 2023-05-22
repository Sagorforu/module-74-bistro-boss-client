import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedPages/Footer";
import Navbar from "../Pages/SharedPages/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>   
            <Footer></Footer>         
        </div>
    );
};

export default Main;