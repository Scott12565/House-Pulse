import mongoose from "mongoose";

const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to database');
    } catch (err) {
        console.error('Error connecting to database:', err);
        // Rethrow so callers (API routes) can handle and surface the error during development
        throw err;
    }
}

export default dbConnect;