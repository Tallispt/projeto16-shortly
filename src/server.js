import express from 'express';
import dotenv from 'dotenv';

import AuthRouter from './routers/authorization.router.js';
import UrlRouter from './routers/urls.routers.js';
import UsersRouter from './routers/users.router.js';
import RankingRouter from './routers/ranking.router.js';

dotenv.config()

const server = express()

server.use(express.json())
// server.use(cors())

server.use(AuthRouter)
server.use(UrlRouter)
server.use(UsersRouter)
server.use(RankingRouter)

server.listen(process.env.PORT, console.log('Connected to port ' + process.env.PORT))