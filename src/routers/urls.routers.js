import express from 'express';

import auth from '../middleware/authorization.middleware.js';
import { shortenUrl, findUrlById, redirectUrl, deleteUrlById } from '../controllers/urls.controller.js'

const router = express.Router()

router.post('/urls/shorten', auth, shortenUrl)
router.get('/urls/:id', findUrlById)
router.get('/urls/open/:shortUrl', redirectUrl)
router.delete('/urls/:id', auth, deleteUrlById)

export default router