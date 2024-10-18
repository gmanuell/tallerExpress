import Producto from "../../models/Producto.js";


let create = async (req,res,next) =>{
    try {
        let producto = req.body
        let all = await Producto.create(producto)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)

    }
} 

let manyCreate = async (req,res,next) =>{
    try {
        let producto = req.body
        let all = await Producto.insertMany(producto)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)

    }
} 

export {create,manyCreate}