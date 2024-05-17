import React, {Suspense} from 'react';
import BlogPostForm from "@/components/blogPosts/BlogPostForm";
import BlogPostsList from "@/components/blogPosts/BlogPostsList";


interface Props {
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] };

}

export default async function Blog(props: Props) {
    return (
        <div>
            <main>

                <BlogPostForm/>
                <h1 className={"mb-5"}>Blog Posts</h1>
                <Suspense>
                    <BlogPostsList/>
                </Suspense>

            </main>
        </div>
    );
}