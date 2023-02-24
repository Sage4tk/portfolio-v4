import { useEffect, useState } from "react";

// firebase

import { app } from "../../../config/firebase";
import Login from "../login";

const MainAdmin:React.FC = () => {

    // check session
    const [user, setUser] = useState<boolean>(false);

    useEffect(() => {
        const user = app.auth().onAuthStateChanged((data) => {
            if (data) {
                setUser(true);
            }

            if (data === null){
                setUser(false);
            }
        });

        return () => user();
    }, [])

    const logout = () => {
        app.auth().signOut()
    }

    return (
        <>
        {user ? <h1>LOGGED IN</h1>:<Login />}
        <button onClick={logout}>LOGOUT</button>
        </>
    );
}

export default MainAdmin;