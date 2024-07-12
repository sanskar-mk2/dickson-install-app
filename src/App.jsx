import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NewCredentials from "./pages/NewCredentials";
import NotFound from "./pages/NotFound";
import Notification from "./pages/Notifications";
import Orders from "./pages/Orders";
import Upload from "./pages/Upload";

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
                        <Route path="/upload/:id" element={<Upload />} />
                        <Route
                            path="/forgot-password"
                            element={<ForgotPassword />}
                        />
                        <Route
                            path="/new-credentials"
                            element={<NewCredentials />}
                        />
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
