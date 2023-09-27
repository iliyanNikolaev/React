import mongoose from "mongoose";
async function connectToDB () {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (err) {
        console.log('Database not connected!!!');
        throw new Error('Database not connected!!!');
    }
}

export default connectToDB;