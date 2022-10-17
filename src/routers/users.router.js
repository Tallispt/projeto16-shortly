import express from 'express';

import auth from '../middlewares/authorization.middleware.js';
import { userInfo } from '../controllers/users.controllers.js';

const router = express.Router()

router.get('/users/me', auth, userInfo)

export default router