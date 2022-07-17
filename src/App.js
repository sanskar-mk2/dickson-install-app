import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import Notification from "./pages/Notifications";
import Orders from "./pages/Orders";

function App() {
    return (
        <div className="w-full flex flex-col items-center">
            <BrowserRouter>
                <Navbar />
                <div className="container p-4">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/details/:id" element={<Details />} />
                        <Route
                            path="/notifications"
                            element={<Notification />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
