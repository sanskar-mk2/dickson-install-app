import { useEffect, useState } from "react";

function Notifications(props) {
    const [noti, set_noti] = useState([]);
    const [reload, set_reload] = useState(true);

    useEffect(() => {
        if (!reload) return;
        const data = new FormData();
        data.append("user_id", props.uid);

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                set_noti(JSON.parse(this.responseText));
                set_reload(false);
            }
        });

        xhr.open("POST", "http://89.40.2.219/api/v1/retrieve_notifications");

        xhr.send(data);
    }, [props, reload]);

    const read_all = () => {
        const data = new FormData();
        data.append("notification_ids", (noti.map(e => e.notification_id)).join(","));
        data.append("user_id", props.uid);

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                set_reload(true);
            }
        });

        xhr.open("POST", "http://89.40.2.219/api/v1/acknowledge_notifications");
        xhr.send(data);
    };

    const read_single = (i) => {
        const data = new FormData();
        data.append("notification_ids", i);
        data.append("user_id", props.uid);

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                set_reload(true);
            }
        });

        xhr.open("POST", "http://89.40.2.219/api/v1/acknowledge_notifications");

        xhr.send(data);
    };

    return (
        <>
            <button onClick={() => read_all()}>Read All</button>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Unit ID</th>
                        <th>Message</th>
                        <th>Ack</th>
                    </tr>
                </thead>
                <tbody>
                    {noti.map((e, i) => (
                        <tr key={i}>
                            <td>{e.created_at}</td>
                            <td>{e.unit_id}</td>
                            <td>{e.message}</td>
                            <td>
                                {e.acknowledged === "yes" ? (
                                    "read"
                                ) : (
                                    <span
                                        onClick={() =>
                                            read_single(e.notification_id)
                                        }
                                    >
                                        Mark Read
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Notifications;
