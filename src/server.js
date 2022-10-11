import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const server = express()

server.use(express.json())
// server.use(cors())

server.listen(process.env.PORT, console.log('Connected to port ' + process.env.PORT))