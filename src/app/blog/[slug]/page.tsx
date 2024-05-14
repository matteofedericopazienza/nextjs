import React from 'react';
import {getBlogPost, getBlogPostMongoose} from "@/app/api/blogs/[id]/route";
import {IBlogPost} from "@/models/BlogPost";

interface BlogPostPageProps {
    children?: React.ReactNode;
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] };

}

export default async function BlogPostPage(props: BlogPostPageProps) {
    // const posts = await getBlogPost({id: "664384adb7beb9f0052c74e2"});
    const response = await getBlogPostMongoose({id: "664384adb7beb9f0052c74e2"});


    console.log(response)

    return (
        <div>
            <h2>Blog Post Title</h2>

        </div>
    );
}