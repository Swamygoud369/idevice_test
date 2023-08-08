import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const db_options = {dbName: "Idevice",};

export const dbConnect = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017", db_options);
        console.log(`connected this`);
    }catch (err){
        console.log(err);
    }
}


// export const dbConnect = async () => {
//     if(mongoose.connections[0]){
//         return;
//     }
//     await mongoose.connect(process.env.MONGODB_URI, db_options)
//     .then(() => console.log("db Connected"))
//     .catch((err) => console.log(err))
// };