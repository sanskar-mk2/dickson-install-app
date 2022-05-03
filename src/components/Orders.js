import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Order from "./Order";
import Remarks from "./Remarks";

function Orders(props) {
    const [orders, set_orders] = useState([]);
    const [detail, set_detail] = useState(0);

    useEffect(() => {
        const data = new FormData();
        data.append("id", props.info.id);

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                set_orders(JSON.parse(this.responseText));
            }
        });

        xhr.open("POST", "http://localhost/api/v1/orders");

        xhr.send(data);
    }, [props]);

    const handle_detail = (data) => {
        set_detail(data);
    }


    return (
        <React.Fragment>
            <Grid container justifyContent="center">
                { detail === 0 ?
                (orders.map((e, i) => (
                    <Order on_detail={handle_detail} key={i} id={e} />
                ))) : <Remarks on_back={handle_detail} uid={props.info.id} oid={detail} />

}
            </Grid>
        </React.Fragment>
    );
}

export default Orders;
