import express from "express"
import "dotenv/config.js"
import "./config/database.js"
import cors from 'cors'
import morgan from "morgan"
import indexRouter from './router/index.js'


const server = express()

const PORT = process.env.PORT

const ready = ()=> console.log("server ready in port:"+ PORT);

server.use(express.json())  //permite trabajar con formato json en estrada y salida 
server.use(express.urlencoded({ extended: true }))
server.use(cors())  //permite trabajar con cors 
server.use(morgan('dev'))

server.use('/api',indexRouter)

server.get('/',(req,res)=>{
    res.send
})

server.listen(PORT, ready);
