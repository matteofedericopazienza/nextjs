'use server';

import connectDB from "@/lib/mongoose";
import MBlogPost, {IBlogPost, VBlogPost} from "@/models/MBlogPost";
import {revalidatePath} from "next/cache";
import {toObjectDocumentId, toViewModelId, toViewModelsId} from "@/actions/utils";


export const getBlogPostById = async (params: { id: string }) => {
    await connectDB();
    console.log("Searching for BlogPost with id: ", params.id);
    const res = await MBlogPost.findById(toObjectDocumentId(params.id)).exec();
    return toViewModelId<VBlogPost, IBlogPost>(res);
};

export const getAllBlogPosts = async () => {
    await connectDB();
    console.log("Searching for all BlogPosts");
    const res = await MBlogPost.find().exec();
    return toViewModelsId<VBlogPost, IBlogPost>(res);
}


export const deleteBlogPostById = async (params: { id: string }) => {
    await connectDB();
    console.log("Deleting BlogPost with id: ", toObjectDocumentId(params.id));
    console.log("toObjectDocumentId(params.id): ", toObjectDocumentId(params.id));
    // revalidateTag("getAllBlogPosts");
    revalidatePath("/blog");
    await MBlogPost.findByIdAndDelete(params.id).exec();
};


export const saveBlogPost = async (params: Partial<IBlogPost>) => {
    await connectDB();
    console.log("Saving BlogPost: ", params);
    const blogPost = new MBlogPost(params);
    await blogPost.save();
    return blogPost;
};