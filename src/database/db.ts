import mongoose from 'mongoose'

const databaseMongoUri = process.env.MONGO_URI

const connect = async () => {
  mongoose.connect(databaseMongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  const db = mongoose.connection
  
  db.on("error", () => {
    console.error.bind("connection error:", console)
  })
  
  db.once("open", () => {
    console.log("database connect")
  })
}

const dropDb = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
}

const clearDatabase = async () => {
  const collections = mongoose.connection.collections;
  for (const k in collections) {
    const collection: any = collections[k]
    await collection.deleteMany();
  }
}

export default {
  connect,
  dropDb,
  clearDatabase
}