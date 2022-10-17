import express from 'express';

import { signUp, signIn } from '../controllers/authorization.controller.js';
import { validationSchema } from '../middlewares/validation.middleware.js';

const router = express.Router()

router.post('/signup', validationSchema, signUp)
router.post('/signin', validationSchema, signIn)

export default router