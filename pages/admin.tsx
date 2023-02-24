import { NextPage } from "next"
import { useEffect } from "react";
import Login from "../components/admin/login";
import MainAdmin from "../components/admin/main";
import { app } from "../config/firebase";

const Admin:NextPage<any> = (props) => {
    return (
        <MainAdmin />
    )
}

export default Admin;