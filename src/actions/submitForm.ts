'use server';

import MBlogPost, {IBlogPost} from "@/models/MBlogPost";
import {saveBlogPost} from "@/actions/blogPostFunctions";
import {revalidatePath} from "next/cache";

export async function handleBlogPostFormSubmit(formData: FormData) {
    // saveBlogPost(e.values());

    //transform form data object to BlogPost object, names are the same
    const blogPost: Partial<IBlogPost> = {
        author: formData.get('author') as string || 'anonymous',
        title: formData.get('title') as string || 'no title',
        content: formData.get('content') as string || 'no content',
        imageUrl: formData.get('imageUrl') as string || 'no image'
    }

    await saveBlogPost(blogPost);
    revalidatePath("/blog");
    return blogPost;

}


export async function handleLoginFormSubmit(formData: FormData) {

    const blogPost: Partial<IBlogPost> = {
        author: formData.get('author') as string || 'anonymous',
        title: formData.get('title') as string || 'no title',
        content: formData.get('content') as string || 'no content',
        imageUrl: formData.get('imageUrl') as string || 'no image'
    }

    await saveBlogPost(blogPost);
    revalidatePath("/blog");
    return blogPost;

}