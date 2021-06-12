import request from 'supertest'
import app from './server'
import db from './database/db'

beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())

describe('User route testing', () => {
  it('should create user', async () => {
    const res = await request(app)
    .post("/user")
    .send({
      name: "nogw",
      email: "nogw@gmail.com"
    })

    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty("message")
  })

  it('should return list of users', async () => {
    const res = await request(app)
    .get("/user")

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("message")
  })
})