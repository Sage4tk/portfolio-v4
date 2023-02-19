import { FormEvent, useEffect, useState } from "react";
import Nav from "../../nav";
import { FormProps } from "./interface";

// firebase
import { app } from "../../../config/firebase";


const Login:React.FC = () => {

    // form state
    const [form, setForm] = useState<FormProps>({
        email: "",
        password: ""
    });

    // form listener
    const formListener = (el:React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [el.target.name]: el.target.value
        });
    }

    // SUBMIT FORM
    const login = async (el:React.FormEvent) => {
        el.preventDefault();
        try {

            // const auth = await app.auth().signInWithEmailAndPassword(form.email, form.password);
            

            const userCred = await app.auth().signInWithEmailAndPassword(form.email, form.password);

            // empty the current values of the form.
            setForm({
                email: "",
                password: ""
            });

                             
        } catch (err) {
            console.log("Something went wrong with long >>", err);
        }

    }

    return (
        <div>
            <form onSubmit={login}>

                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input name="email" value={form.email} type="email" onChange={formListener} className="border" />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input name="password" autoComplete="" value={form.password} type="password"  onChange={formListener} className="border" />
                </div>

                <div>
                    <input type="submit" />
                </div>

            </form>
        </div>
    )
}

export default Login;