import mongoose from "mongoose";
async function connectToDB () {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (err) {
        throw new Error('Database not connected!!!');
    }
}

export default connectToDB;