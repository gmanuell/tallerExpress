import Producto from "../../models/Producto.js";

let allProductos = async (req,res,next) => {
    try {
        let all = await Producto.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)

    }
}
let nombreProductos = async (req,res,next) => {
    try {
        let nombreQuery = req.params.nombre
        let all = await Producto.find({nombre:nombreQuery}); 
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)

    } 
}

let tipoProductos= async (req, res,next) => {
    try {
        let tipoQuery = req.params.tipo;
        let all = await Producto.find({ tipo:tipoQuery}); 
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error)

    }
}

export  {allProductos,nombreProductos,tipoProductos}