
import {getAllBlogPosts} from "@/actions/blogPostFunctions";
import NavLink from "@/components/NavLink";
import React from "react";
import DeleteIconButton from "@/components/blogPosts/DeleteIconButton";

export default async function BlogPostsList() {
    const blogPosts = await getAllBlogPosts();

    return (<>
        <ul>
            {blogPosts.map((blogPost) => (
                <li key={blogPost._id}
                    className={"mb-5 border rounded p-4 shadow bg-white flex flex-col"}>
                    <div className={"flex flex-row justify-between"}>
                        <h2 className="overflow-hidden overflow-ellipsis max-h-20">{blogPost.author} - {blogPost.title}</h2>
                        <DeleteIconButton id={blogPost._id}  />
                    </div>
                    <p className="overflow-hidden overflow-ellipsis max-h-16">{blogPost.content}</p>
                    <NavLink className={"mt-2"} fullPath={`/blog/${blogPost._id}`}>Read More ...</NavLink>

                </li>

            ))}

        </ul>
    </>);
}