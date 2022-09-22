import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Profile from "./pages/profile";
import NotFound from "./pages/notFound";

export default function AppRouter() {
    return (
        <Router>  
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/" element={<Login />}/>
                <Route path="/perfil" element={<Profile />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>            
    );
}