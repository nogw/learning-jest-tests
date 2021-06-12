import express from 'express'
import userController from "./controllers/user.controller";

const router = express.Router()

router.route("/user")
  .post(userController.postNewUser)

router.route("/user")
  .get(userController.getUsers)

export default router