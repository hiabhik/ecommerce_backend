const {MongoClient} = require("mongodb");

const url="mongodb+srv://abhikguptaa:abhikgupta123@cluster0.gjh7qna.mongodb.net/ECommerce?retryWrites=true&w=majority"

const client= new MongoClient(url);

const findAllFromDb = async (collectionName) => {
    try {
        await client.connect();
        console.log("connection succesfull to db")
        const database = client.db("ECommerce");
        const collection = database.collection(collectionName);
        const dbResponse = await collection.find().toArray();
        // console.log("db response",dbResponse)
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message;
    }
}

module.exports={findAllFromDb}