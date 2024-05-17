import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async (): Promise<void> => {
	if (isConnected) return;

	mongoose.set('strict', false);
	mongoose.set('strictQuery', true);

	try {
		await mongoose.connect(process.env.MONGODB_URI + 'blog' || '');
		isConnected = true;
		console.log('Connesso a MongoDB tramite Mongoose!');
	} catch (error) {
		console.error('Errore di connessione a MongoDB:', error);

	}
};

export default connectDB;


