import mongoose from "mongoose";
// chalk is dev dependencies which change background color and text color of console log statement.
import chalk from "chalk";

// initial is connected false and can be changed when data base connected and so when database connection is required then every time no need to reconnect to the database
let isConnected = false;

const dbConnect = async () => {
    // setting the strict query true
    mongoose.set('strictQuery',true)

    // if database already connected then no need to reconnected simply console it is already connected and return.
    if(isConnected){
        console.log(chalk.bgBlue.white('Mongodb is already connected.'))
        return
    }
    // if database is not connected then connect the database named portfolio and set useNewUrlParser to true and useUnifiedTopology to true.
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:'portfolio',
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        // setting isConnected variable true that means when ever we need a database connection and database is already connected then no need to reconnect
        isConnected=true;
        console.log(chalk.white.bgGreen('mongodb connected successfully.'))
    } catch (error) {
        console.log(chalk.bgRed.white(error?.message || 'failed to connect mongodb'))
    }

}

export default dbConnect;