import { NextPage } from "next"
import { app } from "../config/firebase";

const Admin:NextPage<any> = (props) => {
    const signIn = async() => {
        try {
           const user = await app.auth().signInWithEmailAndPassword("","");

           console.log(await user.user?.getIdToken());
        } catch (err) {
            console.log(err);

        }
    }

    return (
        <div>
            <button onClick={() => {signIn()}}>REGISTER</button>
        </div>
    )
}

export default Admin;