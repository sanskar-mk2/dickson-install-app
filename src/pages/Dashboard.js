import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/dashboard/Card";
import { useAuthContext } from "../hooks/useAuthContext";

function Dashboard() {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) navigate("/login");
    }, [user, navigate]);

    return (
        <div className="flex w-full flex-col gap-4">
            <Card title="Orders" link="/orders" />
            <Card title="Notifications" link="/notifications" />
            <Card title="Logout" link="/logout" />
        </div>
    );
}

export default Dashboard;
