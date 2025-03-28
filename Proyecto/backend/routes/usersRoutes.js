// backend/routes/usersRoutes.js
import express from 'express'
import { createUser } from '../controllers/usersController.js'

const router = express.Router()

router.post('/', createUser)

export default router
