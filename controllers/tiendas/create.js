import Tienda from "../../models/Tienda.js";

let create = async (req,res) =>{
    try {
        let tienda = req.body
        let all = await Tienda.create(tienda)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
} 

let manyCreate = async (req,res) =>{
    try {
        let tienda = req.body
        let all = await Tienda.insertMany(tienda)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
} 

export {create,manyCreate}