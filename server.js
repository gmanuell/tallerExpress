import express from "express"
import "dotenv/config.js"
import "./config/database.js"


const server = express()

const PORT = process.env.PORT

const ready = ()=> console.log("server ready in port:"+ PORT);

server.get('/',(req,res)=>{
    res.send
})

server.listen(PORT, ready);
