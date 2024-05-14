import {NextResponse} from 'next/server';
import {NextRequest} from 'next/server';
import {ObjectId} from 'mongodb';
import clientPromise from "@/lib/mongodb";
import BlogPost, {IBlogPost} from "@/models/BlogPost";
import {id} from "postcss-selector-parser";
import connectDB from "@/lib/mongoose";


interface BlogPostResponse {
    body: IBlogPost | null;
    status: number;
    statusText: string;
    error?: string; // Aggiungi un campo opzionale per l'errore
}


export async function getBlogPost(params: { id: string }) {
    try {
        const client = await clientPromise;
        console.log("Searching for BlogPost with id: ", params.id)
        const db = client.db('blog');
        const blogPost = await db.collection('blogposts').findOne<IBlogPost>( {_id: new ObjectId(params.id)});
        console.log(blogPost)
        return NextResponse.json( {body: blogPost, status: 200, statusText: 'OK'});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ body: null, status: 500,error: 'Errore durante il recupero del blog'});
    }
}


export async function getBlogPostMongoose(params: { id: string }): Promise<NextResponse<BlogPostResponse>> {
    connectDB();
    try {
        console.log("Searching for BlogPost with id: ", params.id);
        const blogPost = await BlogPost.findById<IBlogPost>(params.id).exec();
        console.log(blogPost?.author);

        return NextResponse.json<BlogPostResponse>({
            body: blogPost!,
            status: 200,
            statusText: 'OK',
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json<BlogPostResponse>({
            body: null,
            status: 500,
            statusText: 'Errore durante il recupero del blog',
            error: error instanceof Error ? error.message : 'Errore sconosciuto',
        });
    }
}