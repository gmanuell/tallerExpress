import Tienda from "../../models/Tienda.js";

let create = async (req,res,next) =>{
    try {
        let tienda = req.body
        let all = await Tienda.create(tienda)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)

    }
} 

let manyCreate = async (req,res,next) =>{
    try {
        let tienda = req.body
        let all = await Tienda.insertMany(tienda)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)

    }
} 

export {create,manyCreate}