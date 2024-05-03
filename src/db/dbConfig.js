import mongoose from "mongoose";

const dbConfig = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log('Mongo connection: ', connection.connection.host);

    } catch (error) {
        console.log('MongoDB connection Failed: ', error);
        process.exit()
    }
}

export default dbConfig;
