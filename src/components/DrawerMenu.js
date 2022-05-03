import {
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import React, { useState } from "react";

function DrawerMenu(props) {
    const [drawer, set_drawer] = useState(false);

    const list = () => (
        <Box
            sx={{
                width: "left" === "top" || "left" === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            onClick={toggle_drawer(false)}
            onKeyDown={toggle_drawer(false)}
        >
            <List>
                {["Home", "Orders", "Notifications", "Logout"].map(
                    (text, idx) => (
                        <ListItem onClick={() => props.on_menu(text)} button key={text}>
                            <span className="material-symbols-outlined">
                                military_tech
                            </span>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );

    const toggle_drawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        set_drawer(open);
    };

    return (
        <React.Fragment>
            <Button onClick={toggle_drawer(true)}>
                <span className="material-symbols-outlined">menu</span>
            </Button>
            <Drawer anchor="left" open={drawer} onClose={toggle_drawer(false)}>
                {list()}
            </Drawer>
        </React.Fragment>
    );
}

export default DrawerMenu;
