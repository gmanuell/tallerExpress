import Producto from "../../models/Producto.js";

let allProductos = async (req,res) => {
    try {
        let all = await Producto.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return response.status(500).json({
            response: error
        })
    }
}
let nombreProductos = async (req,res) => {
    try {
        let nombreQuery = req.params.nombre
        let all = await Producto.find({nombre:nombreQuery}); 
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    } 
}

let tipoProductos= async (req, res) => {
    try {
        let tipoQuery = req.params.x;
        let all = await Producto.find({ tipo:tipoQuery}); 
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
}

export  {allProductos,nombreProductos,tipoProductos}