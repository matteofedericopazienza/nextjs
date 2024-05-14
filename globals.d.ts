// globals.d.ts

import { MongoClient } from 'mongodb';
import {Mongoose} from "mongoose";

declare global {
    var _mongoClientPromise: Promise<MongoClient> | null;
    var _mongoose
}