import Tienda from "../../models/Tienda.js";

let allTiendas = async (req,res,next) => {
    try {
        let all = await Tienda.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)

    }
}


let nombreTiendas = async (req,res,next) => {
    try {
        let nombreQuery = req.params.nombre
        let all = await Tienda.find({Nombre:nombreQuery}); 
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)

    } 
}

let direccionTiendas = async (req, res,next) => {
    try {
        let direccionQuery = req.params.direccion;
        let all = await Tienda.find({ Direccion:direccionQuery}); 
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error)

    }
}

export  {allTiendas,nombreTiendas,direccionTiendas}