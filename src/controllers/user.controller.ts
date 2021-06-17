import { Request, Response } from 'express'

import User, { IUser } from '../models/user.model'
import validateUser from '../validation/user.validation'

const postCreateUser = async (req: Request, res: Response) => {
  const { errors, isValid } = validateUser(req.body) 

  if (!isValid) {
    return res.status(400).json({
      error: errors
    })
  }
  
  try {
    let existingUser = await User.findOne({ email: req.body.email }).exec()

    if (existingUser) {
      return res.status(400).json({
        error: "user exists"
      })
    }

    let user = new User({
      email: req.body.email,
      name: req.body.name
    })

    try {
      await user.save()
    } catch (error) {
      return res.status(400).json({
        error: error
      })
    }
    
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
}

const getUsers = async (req: Request, res: Response) => {
  try {
    let users = User.find({}).exec()

    if (users.length < 1) {
      return res.status(400).json({
        error: "no registered user"
      })
    }

    return res.status(200).json({
      message: users
    })
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
}

export default {
  postCreateUser, 
  getUsers
}