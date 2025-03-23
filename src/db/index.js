import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        const connnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('\n MongoDB connected !! DB HOST: ${connnectionInstance.connection.host}');
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB