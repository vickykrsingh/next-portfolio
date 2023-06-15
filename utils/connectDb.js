import mongoose from "mongoose";

let isConnected = false;

const dbConnect = async () => {
    mongoose.set('strictQuery',true)

    if(isConnected){
        console.log('Mongodb is already connected.')
        return
    }

    try {
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:'portfolio',
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnected=true;
        console.log('mongodb connected successfully.')
    } catch (error) {
        console.log(error?.message || 'failed to connect mongodb')
    }

}

export default dbConnect;