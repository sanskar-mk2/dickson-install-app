import React, { useEffect } from "react";
import { Grid } from "@mui/material";

function Items(props) {
    const { item_name, quantity, item_desc0, item_desc1, item_desc2 } =
        props.order;

    return (
        <React.Fragment>
            {item_name.map((e, i) => (
                <React.Fragment key={i}>
                    <Grid item xs={6}>
                        {/* <span className="material-symbols-outlined">
                            category
                        </span> */}
                        {e}
                        <br></br>
                        {quantity[i]}
                        <br></br>
                        {item_desc0[i]}
                        <br></br>
                        {item_desc1[i]}
                        <br></br>
                        {item_desc2[i]}
                        <br></br>
                    </Grid>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
}

export default Items;
