import request from 'supertest'
import app from './server'

describe('Api testing', () => {
  it('should return status 200', async () => {
    const res = await request(app)
    .post("/user")
    .send({
      name: "nogw"
    })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("message")
  })

  it('should return number multiply p 2', async () => {
    const res = await request(app)
    .post("/add")
    .send({
      num: 2
    })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("message")
    expect(res.body.message).toEqual(4)
  })
})