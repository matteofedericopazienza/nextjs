import {handleBlogPostFormSubmit} from "@/actions/submitForm";
import React, {ReactNode} from "react";
import classes from "./login.module.css";

interface Props {
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] };

}

export default function LoginForm(props: Props) {


    return <section className={"my-5 mb-10 pb-10 "}>
        <h2 className={classes.loginTitle}>Authentication</h2>
        <form action={handleLoginFormSubmit} className="space-y-4">
            <div>
                <label htmlFor="title"
                       className="block text-gray-700 font-bold mb-2">Email:</label>
                <input
                    type="email"
                    id="title"
                    name="title"
                    className={classes.inputField}
                />
            </div>
            <div>
                <label htmlFor="content"
                       className="block text-gray-700 font-bold mb-2">Password:</label>
                <input
                    id="content"
                    name="content"
                    type="password"
                    className={classes.inputField}
                />
            </div>
            <button type="submit" className={classes.loginButton}>
                Save
            </button>
            <button type="submit" className={classes.loginButton}>
                Register
            </button>
        </form>
    </section>
}