import Empleado from "../../models/Empleado.js";

let create = async (req,res) =>{
    try {
        let empleado = req.body
        let all = await Empleado.create(empleado)
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
        let empleado = req.body
        let all = await Empleado.insertMany(empleado)
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