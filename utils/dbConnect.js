import mongoose from "mongoose";

mongoose.set("strictQuery", false);

// const db_options = {dbName: "Idevice",};

export const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`connected this`);
    }catch (err){
        console.log(err);
    }
}