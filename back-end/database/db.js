import mongoose from 'mongoose';

const Connection = async (username, password, dbName) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.froa2.mongodb.net/?retryWrites=true&w=majority` `mongodb+srv://:`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log("You are connected successfully!");
    } catch (error) {
        console.log("Cannot connect to MongoDb. Error: " + error);
    }
}

export default Connection;