import request from 'supertest'
import app from '../server'
import db from '../database/db'

beforeAll(async () => await db.connectDb())
afterAll(async () => await db.clearDb())

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

  it('should return existing user error', async () => {
    const res = await request(app)
    .post("/user")
    .send({
      name: "nogw1",
      email: "nogw@gmail.com"
    })

    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty("error")
  })

  it('should return list of users', async () => {
    const res = await request(app)
    .get("/user")

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("message")
  })
})