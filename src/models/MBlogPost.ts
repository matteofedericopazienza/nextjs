import mongoose, {Document, Model, Schema} from 'mongoose';


//View Model (VM) for BlogPost
export interface VBlogPost {
    _id: string;
    author: string;
    title: string;
    content: string;
    imageUrl: string;
}


//Database Model (DM) for BlogPost
export interface IBlogPost extends Omit<VBlogPost, '_id'>, Document {
}

const blogPostSchema: Schema<IBlogPost> = new Schema({
        author: {type: String, required: true},
        title: {type: String, required: true},
        content: {type: String, required: true},
        imageUrl: {type: String},
    },
);

const MBlogPost: Model<IBlogPost> =
    mongoose.models.BlogPost
    || mongoose.model<IBlogPost>('BlogPost', blogPostSchema, 'blogposts');





export default MBlogPost;