import { FormEvent, useEffect, useState } from "react";
import Nav from "../../nav";
import { FormProps } from "./interface";


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

    useEffect(() => {
        console.log(form);
    }, [form]);

    return (
        <div>
            <form>

                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input name="email" value={form.email} type="email" onChange={formListener} />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input name="password" value={form.password} type="password" />
                </div>
            </form>
        </div>
    )
}

export default Login;