import Card from "../components/dashboard/Card";

function Dashboard() {
    return (
        <div className="flex w-full flex-col gap-4">
            <Card title="Orders" link="/orders" />
            <Card title="Notifications" link="/notifications" />
            <Card title="Logout" link="/logout" />
        </div>
    );
}

export default Dashboard;
