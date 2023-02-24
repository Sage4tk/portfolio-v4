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

    // signout test button
    const signout = async (callback:Function):Promise<void> => {
        try {
            
            callback;
        } catch (err) {
            console.log("there was error on login");

        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <form onSubmit={login} className="shadow-xl rounded-lg px-6 py-7 w-[360px] border">
                <div className="mb-4">
                    <h1 className="text-xl">ADMIN PANEL</h1>
                </div>
                <div className="flex flex-col mb-2">
                    <label htmlFor="email" className="mb-1">E-mail:</label>
                    <input name="email" value={form.email} type="email" onChange={formListener} className="border px-4 py-2 rounded-2xl" />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="password" className="mb-1">Password:</label>
                    <input name="password" autoComplete="" value={form.password} type="password"  onChange={formListener} className="border px-4 py-2 rounded-2xl" />
                </div>

                <input type="submit" value="login" className=" w-full bg-black text-white rounded-xl flex items-center justify-center py-2 hover:bg-slate-600" />

            </form>

        </div>
    )
}

export default Login;