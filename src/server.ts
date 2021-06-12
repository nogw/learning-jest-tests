require('dotenv').config()

import express, { Request, Response } from 'express'
import mongoose from 'mongoose'

import router from './router'
import db from './database/db'

const app = express()
const port = 8080

db.connect

app.use(express.json())
app.use("/", router)

app.listen(port)

export default app