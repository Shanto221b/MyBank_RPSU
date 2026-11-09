const { MongoClient } = require("mongodb");

const mongoUrl = process.env.MONGO_URI;

const client = new MongoClient(mongoUrl);

async function connectDatabase() {
  await client.connect();

  const database = client.db("MyBankDB");

  console.log("MongoDB connected");

  return database;
}

module.exports = connectDatabase;