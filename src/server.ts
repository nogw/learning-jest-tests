import express, { Request, Response } from 'express'

const app = express()
const port = 8080

app.use(express.json())

app.post("/user", (req: Request, res: Response) => {
  // ! just to test

  if (req.body.name) {
    return res.status(200).json({
      message: `hello ${req.body.name}`
    })
  } else {
    return res.status(400).json({
      error: 'name is required'
    })
  }
})

app.post("/add", (req: Request, res: Response) => {
  // ! just to test

  if (req.body.num) {
    return res.status(200).json({
      message: req.body.num * 2
    })
  } else {
    return res.status(400).json({
      error: 'name is required'
    })
  }
})

app.listen(port)

export default app