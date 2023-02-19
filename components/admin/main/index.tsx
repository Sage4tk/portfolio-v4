import { useEffect } from "react";

// firebase

import { app } from "../../../config/firebase";

const MainAdmin:React.FC = () => {

    useEffect(() => {
        const user = app.auth().onAuthStateChanged((data) => {
            console.log(data);
        })

    }, [])

    return (
        <>
        </>
    );
}

export default MainAdmin;