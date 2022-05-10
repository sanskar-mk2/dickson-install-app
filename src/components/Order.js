import React, { useState } from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import Items from "./Items";

function Order(props) {
    const [order] = useState(props.order);

    // useEffect(() => {
    //     const data = new FormData();
    //     data.append("id", props.id);

    //     const xhr = new XMLHttpRequest();
    //     xhr.withCredentials = false;

    //     xhr.addEventListener("readystatechange", function () {
    //         if (this.readyState === this.DONE) {
    //             set_order(JSON.parse(this.responseText));
    //         }
    //     });
    //     xhr.open("POST", "http://89.40.2.219/api/v1/order");
    //     xhr.send(data);
    // }, [props]);

    return (
        <React.Fragment>
            {order.id !== 0 ? (
                <Card sx={{ minWidth: 300, m: 2 }}>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                        >
                            Order# {order.order_number}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {order.project_name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {order.order_date}
                        </Typography>
                        <Typography variant="body2">
                            Street: {order.address}
                            <br />
                            City: {order.city}
                            <br />
                            State: {order.state}
                            <br />
                            Post Code: {order.zip}
                            <br />
                            Cutomer Phone: {order.customer_phone}
                            <br />
                            Onsite Phone: {order.onsite_phone}
                            <br />
                        </Typography>
                        <hr></hr>
                        <Grid container>
                            <Items items={order.items} />
                        </Grid>
                        <CardActions>
                            <Button
                                onClick={() => props.on_detail(order.order_id)}
                                size="small"
                            >
                                Add Remarks
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            ) : (
                ""
            )}
        </React.Fragment>
    );
}

export default Order;
