import mongoose, { Document, Schema } from 'mongoose';

export interface IBlogPost extends Document {

    author: string;
    content: string;
    image: string;

}

const blogPostSchema: Schema = new Schema({
    author: { type: String},
    content: { type: String},
    image: { type: String},
}, { collection: 'blogposts' });


const BlogPost = mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', blogPostSchema);

export default BlogPost;