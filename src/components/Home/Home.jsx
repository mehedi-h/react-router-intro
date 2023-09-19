import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>This is the home components</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;