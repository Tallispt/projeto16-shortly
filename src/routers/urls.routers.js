import express from 'express';

import auth from '../middlewares/authorization.middleware.js';
import { shortenUrl, findUrlById, redirectUrl, deleteUrlById } from '../controllers/urls.controller.js'
import { validationSchema } from '../middlewares/validation.middleware.js';

const router = express.Router()

router.post('/urls/shorten', auth, validationSchema, shortenUrl)
router.get('/urls/:id', findUrlById)
router.get('/urls/open/:shortUrl', redirectUrl)
router.delete('/urls/:id', auth, deleteUrlById)

export default router