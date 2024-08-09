import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://chamithu:qEMle2jPgSPxKopt@cluster2.82lh0.mongodb.net/EMS?retryWrites=true&w=majority&appName=Cluster2',
            );
            console.log(`MongoDB Connected`);
    } catch (error){
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;