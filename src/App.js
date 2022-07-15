import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Orders from "./pages/Orders";

function App() {
    return (
        <div className="w-full flex flex-col items-center">
            <BrowserRouter>
                <Navbar />
                <div className="container p-4">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/orders" element={<Orders />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
