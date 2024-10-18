import Tienda from "../../models/Tienda.js";

let allTiendas = async (req,res) => {
    try {
        let all = await Tienda.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return response.status(500).json({
            response: error
        })
    }
}


let nombreTiendas = async (req,res) => {
    try {
        let nombreQuery = req.params.nombre
        let all = await Tienda.find({nombre:nombreQuery}); 
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    } 
}

let direccionTiendas = async (req, res) => {
    try {
        let direccionQuery = req.params.direccion;
        let all = await Tienda.find({ direccion:direccionQuery}); 
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
}

export  {allTiendas,nombreTiendas,direccionTiendas}