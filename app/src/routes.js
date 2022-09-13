import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

export default function AppRouter() {
    return (
        <Router>  
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>            
    );
}