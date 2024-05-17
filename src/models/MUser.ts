import mongoose, {Document, Model, Schema} from 'mongoose';
import {IBlogPost} from './MBlogPost';

//View Model (VM) for User
export interface VUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    blogPosts: string[]; // Array of blog post IDs
}

//Database Model (DM) for User
export interface IUser extends Omit<VUser, '_id'>, Document {
    blogPosts: IBlogPost['_id'][]; // Reference to BlogPost documents
}

const UserSchema: Schema<IUser> = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    blogPosts: [{
        type: Schema.Types.ObjectId, ref: 'BlogPost', default: [],
        get: (id: IBlogPost['_id']) => {
            return id.toString()
        },
        set: (id: IBlogPost['_id']) => {
            return id.toString()
        }
    }],

},{

    virtuals: {
        id: {
            get: (user: IUser) => {
                return user._id
            },
            set: (user: IUser) => {
                return user._id
            },
            options: {ref: 'User', justOne: true}
        }
    }
});

const MUser: Model<IUser> =
    mongoose.models.User
    || mongoose.model<IUser>('User', UserSchema, 'Users');

export default MUser;