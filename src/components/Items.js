import React from "react";
import { Grid } from "@mui/material";

function Items(props) {

    return (
        <React.Fragment>
            {props.items.map((e, i) => (
                <React.Fragment key={i}>
                    <Grid item xs={6}>
                        {/* <span className="material-symbols-outlined">
                            category
                        </span> */}
                        {e.item_name}
                        <br></br>
                        {e.quantity}
                        <br></br>
                        {e.item_desc0}
                        <br></br>
                        {e.item_desc1}
                        <br></br>
                        {e.item_desc2}
                        <br></br>
                    </Grid>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
}

export default Items;
