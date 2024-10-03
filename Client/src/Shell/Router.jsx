import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Access/Login";
import Signup from "../Access/Signup";
import Home from "../Access/Home";
import Dashboard from "../Components/Dashboard";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;