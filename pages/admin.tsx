import { NextPage } from "next"
import { useEffect } from "react";
import Login from "../components/admin/login";
import { app } from "../config/firebase";

const Admin:NextPage<any> = (props) => {
    useEffect(() => {
        const user = app.auth().onAuthStateChanged((data) => {
            console.log(data);
        });
        
        // disconnect user
        return () => user();
    }, [])

    return (
        <Login />
    )
}

export default Admin;