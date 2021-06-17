import mongoose, { CollectionBase }  from 'mongoose'

const connectDb = async () => {
  const databaseMongoUri = process.env.MONGO_URI
  mongoose.connect(databaseMongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

const dropDb = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
}

const clearDb = async () => {
  const collections = mongoose.connection.collections;
  for (const k in collections) {
    const collection: any = collections[k]
    await collection.deleteMany();
  }
}

export default {
  connectDb,
  dropDb,
  clearDb
}