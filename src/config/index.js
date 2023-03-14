require('dotenv').config()
const uri = process.env.MONGODB_URI


//MongoDB
export const connectDB = async() => {
    var mongoDB = process.env.MONGO_HOST + process.env.MONGO_PORT + process.env.MONGO_DB_NAME
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.Promise = global.Promise;
    return mongoose.connection;
};