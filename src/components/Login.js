import { Button, Box, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function Login(props) {
    const [password, set_password] = useState("");
    const [email, set_email] = useState("");
    const [try_login, set_try_login] = useState(false);

    useEffect(() => {
        if (try_login === false) return;
        const data = new FormData();
        data.append("email", email);
        data.append("password", password);

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                props.on_login(JSON.parse(this.responseText));
            }
        });
        xhr.open("POST", "http://localhost/api/v1/login");
        xhr.send(data);
    });

    return (
        <React.Fragment>
            <Grid container justifyContent="center">
                <Box component="form">
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 2 }}
                            required
                            label="Email"
                            value={email}
                            onChange={(e) => set_email(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 2 }}
                            required
                            label="Password"
                            value={password}
                            onChange={(e) => set_password(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            onClick={() => set_try_login(true)}
                            sx={{ m: 2 }}
                            variant="contained"
                        >
                            Log In
                        </Button>
                    </Grid>
                </Box>
            </Grid>
        </React.Fragment>
    );
}

export default Login;
