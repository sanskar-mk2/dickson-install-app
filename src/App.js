import React, { useEffect, useState } from "react";
import DrawerMenu from "./components/DrawerMenu";
import Home from "./components/Home";
import Login from "./components/Login";
import Orders from "./components/Orders";

function App() {
    const [menu, set_menu] = useState("");
    const [login, set_login] = useState({ id: 0 });

    const handle_login = (data) => {
        set_login(data);
    };

    useEffect(() => {
        set_menu("Home")
    }, [login])

    const handle_menu = (data) => {
        set_menu(data);
    };

    return (
        <React.Fragment>
            {login.id === 0 ? (
                <Login on_login={handle_login} />
            ) : (
                <React.Fragment>
                    <DrawerMenu on_menu={handle_menu} />
                    {menu === "Home" ? <Home info={login} /> : menu === "Orders" ? <Orders info={login} /> : "" }
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

export default App;
