import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/notifications/Card";
import { useAuthContext } from "../hooks/useAuthContext";

function Notification() {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const [notifications, set_notifications] = useState(null);

    useEffect(() => {
        if (!user) navigate("/login");
        const get_details = async () => {
            if (!user) return;
            const form = new FormData();
            form.append("user_id", user.user_id);
            const response = await fetch(
                `http://in.dfm-dashboard.com/api/v1/retrieve_notifications`,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                    },
                    body: form,
                }
            );

            const json = await response.json();

            if (response.ok) {
                console.log(json);
                set_notifications(json);
            }
            if (!response.ok) {
                console.error(json);
            }
        };

        get_details();
    }, [user, navigate]);
    return (
        <div className="flex flex-col gap-2">
            {notifications &&
                notifications.map((e, i) => <Card key={i} notification={e} />)}
        </div>
    );
}

export default Notification;
