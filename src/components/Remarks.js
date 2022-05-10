import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Grid,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function Remarks(props) {
    const [floor, set_floor] = useState("");
    const [unit, set_unit] = useState("");
    const [details, set_details] = useState([]);
    const [floors, set_floors] = useState([]);
    const [remarks, set_remarks] = useState("");
    const [status, set_status] = useState("");
    const [images, set_images] = useState([]);

    const on_file_upload = (e) => {
        let files = e.target.files;
        set_images(files);
    };

    const handle_floor = (e) => {
        set_floor(e.target.value);
    };

    const handle_unit = (e) => {
        set_unit(e.target.value);
    };

    useEffect(() => {
        if (details.find((e) => e.unit_number === unit) === undefined) return;
        set_status(details.find((e) => e.unit_number === unit).status); //u
    }, [unit, details]);

    const u = () => {
        return details.find((e) => e.unit_number === unit);
    };

    const handle_text = (e) => {
        set_remarks(e.target.value);
    };

    const handle_status = (e) => {
        set_status(e.target.value);
    };

    const send_remarks = () => {
        const data = new FormData();
        data.append("unit_id", u().unit_id);
        data.append("user_id", props.uid);
        data.append("status", status);
        if (remarks !== "") data.append("remarks", remarks);
        [...images].forEach((e) => {
            data.append("image[]", e);
        });
        // data.append(
        //     "image[]",
        //     "C:\\Users\\sohma_w4\\Downloads\\pexels-m&w-studios-90317.jpg"
        // );
        // data.append(
        //     "image[]",
        //     "C:\\Users\\sohma_w4\\Downloads\\pexels-andrea-davis-5411784.jpg"
        // );
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                props.on_back(0);
            }
        });

        xhr.open("POST", "http://89.40.2.219/api/v1/send_remarks");

        xhr.send(data);
    };

    useEffect(() => {
        const data = new FormData();
        data.append("user_id", props.uid);
        data.append("order_id", props.oid);

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                set_details(JSON.parse(this.responseText));
            }
        });

        xhr.open("POST", "http://89.40.2.219/api/v1/details");

        xhr.send(data);
    }, [props]);

    useEffect(() => {
        set_floors([...new Set(details.map((it) => it.floor))]);
    }, [details]);

    return (
        <React.Fragment>
            <Button sx={{ m: 2 }} fullWidth onClick={() => props.on_back(0)}>
                Go Back
            </Button>
            <Box>
                <FormControl sx={{ m: 2 }} fullWidth>
                    <InputLabel id="floor">Floor</InputLabel>
                    <Select
                        iid="floor"
                        label="Floor"
                        value={floor}
                        onChange={handle_floor}
                    >
                        <MenuItem value="">None</MenuItem>
                        {floors.map((e, i) => (
                            <MenuItem
                                key={i}
                                value={e}
                            >{`Floor ${e}`}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 2 }} fullWidth>
                    <InputLabel id="unit">Unit</InputLabel>
                    <Select
                        id="unit"
                        label="Unit"
                        value={unit}
                        onChange={handle_unit}
                    >
                        <MenuItem value="">None</MenuItem>
                        {details
                            .filter((e) => e.floor === floor)
                            .map((e, i) => (
                                <MenuItem
                                    key={i}
                                    value={e.unit_number}
                                >{`Unit ${e.unit_number}`}</MenuItem>
                            ))}
                    </Select>
                </FormControl>
            </Box>
            {u() !== undefined ? (
                <Grid container justifyContent="center">
                    <Card sx={{ minWidth: 300, m: 2 }}>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Floor {u().floor}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {u().unit_number}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Unit Type {u().unit_type}
                            </Typography>
                            <hr></hr>
                            <Grid container>
                                {Object.keys(u().to_install).map((e, i) => (
                                    <Grid key={i} item xs={6}>
                                        {e}
                                        <br></br>
                                        {u().to_install[e]}
                                        <br></br>
                                        {/* {item_desc0[i]}
                                    <br></br>
                                    {item_desc1[i]}
                                    <br></br>
                                    {item_desc2[i]}
                                    <br></br> */}
                                    </Grid>
                                ))}
                            </Grid>
                            <hr></hr>
                            <Grid container justifyContent="center">
                                <Grid item sx={{ m: 2 }} xs={12}>
                                    <TextField
                                        fullWidth
                                        id="standard-multiline-flexible"
                                        label="Installer Remarks"
                                        multiline
                                        maxRows={4}
                                        value={u().installer_remarks ?? ""}
                                        disabled
                                        // onChange={handle_text}
                                    />
                                    <div>
                                        {u().customer_images.map((e, idx) => (
                                            <img
                                                height={100}
                                                key={idx}
                                                src={e}
                                                alt="customer"
                                            ></img>
                                        ))}
                                    </div>
                                </Grid>
                                <Grid item sx={{ m: 2 }} xs={12}>
                                    <TextField
                                        fullWidth
                                        id="standard-multiline-flexible"
                                        label="Customer Remarks"
                                        multiline
                                        maxRows={4}
                                        value={u().customer_remarks ?? ""}
                                        disabled
                                        // onChange={handle_text}
                                    />
                                    {u().installer_images.map((e, idx) => (
                                        <img
                                            key={idx}
                                            height={100}
                                            src={e}
                                            alt="installer"
                                        ></img>
                                    ))}
                                </Grid>
                                <Grid item sx={{ m: 2 }} xs={12}>
                                    <TextField
                                        fullWidth
                                        id="standard-multiline-flexible"
                                        label="Add Remarks Here"
                                        multiline
                                        maxRows={4}
                                        value={remarks}
                                        onChange={handle_text}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        capture="camera"
                                        multiple
                                        onChange={(e) => on_file_upload(e)}
                                    ></input>
                                </Grid>
                                <FormControl sx={{ m: 2 }} fullWidth>
                                    <InputLabel id="unit">Unit</InputLabel>
                                    <Select
                                        id="unit"
                                        label="Unit"
                                        value={status}
                                        onChange={handle_status}
                                    >
                                        <MenuItem value="">none</MenuItem>
                                        <MenuItem
                                            selected={
                                                u().status === "in progress"
                                            }
                                            value="in progress"
                                        >
                                            in progress
                                        </MenuItem>
                                        <MenuItem
                                            selected={
                                                u().status === "not started"
                                            }
                                            value="not started"
                                        >
                                            not started
                                        </MenuItem>
                                        <MenuItem
                                            selected={
                                                u().status === "completed"
                                            }
                                            value="completed"
                                        >
                                            completed
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid item xs={12}>
                                    {" "}
                                    <Button
                                        fullWidth
                                        onClick={() => send_remarks()}
                                    >
                                        Upload
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ) : (
                ""
            )}
        </React.Fragment>
    );
}

export default Remarks;
