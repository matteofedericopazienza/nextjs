import React from 'react';
import {getBlogPostById} from "@/actions/blogPostFunctions";

interface BlogPostPageProps {
    params: { slug: string };
}

export default async function BlogPostPage(props: BlogPostPageProps) {

    const blogPost = await getBlogPostById({id: props.params.slug});
    return (
        <div>
            {blogPost &&
                <div>
                    <h1>{blogPost.title} - {blogPost.author}</h1>

                    <p>{blogPost.content}</p>
                </div>
            }

        </div>
    );
}