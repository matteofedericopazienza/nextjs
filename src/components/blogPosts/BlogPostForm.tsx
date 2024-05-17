import classes from "@/components/blogPosts/blog.module.css";
import {handleBlogPostFormSubmit} from "@/actions/submitForm";
import React, {ReactNode} from "react";

interface Props {
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] };

}

export default function BlogPostForm(props: Props) {


    return <section className={"my-5 mb-10 pb-10 "}>
        <h2 className={classes.loginTitle}>New Blog Post</h2>
        <form action={handleBlogPostFormSubmit} className="space-y-4">
            <div>
                <label htmlFor="title"
                       className="block text-gray-700 font-bold mb-2">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className={classes.inputField}
                />
            </div>
            <div>
                <label htmlFor="content"
                       className="block text-gray-700 font-bold mb-2">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    className={classes.inputField}
                />
            </div>
            <button type="submit" className={classes.loginButton}>
                Save
            </button>
        </form>
    </section>
}