import React, { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import Items from "./Items";

function Order(props) {
    const [order, set_order] = useState({ id: 0 });

    useEffect(() => {
        const data = new FormData();
        data.append("id", props.id);

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                set_order(JSON.parse(this.responseText));
            }
        });
        xhr.open("POST", "http://localhost/api/v1/order");
        xhr.send(data);
    }, [props]);

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
                            Order# { order.order_number }
                        </Typography>
                        <Typography variant="h5" component="div">
                            {order.project_name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {order.order_date}
                        </Typography>
                        <Typography variant="body2">
                            {order.project_address}
                        </Typography>
                        <hr></hr>
                        <Grid container>
                        <Items order={order} />
                        </Grid>
                        <CardActions>
                            <Button onClick={()=>props.on_detail(props.id)} size="small">Add Remarks</Button>
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
