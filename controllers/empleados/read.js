import Empleado from "../../models/Empleado.js";

let allEmpleados = async (req,res,next) => {
    try {
        let all = await Empleado.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)

    }
}


let nombreEmpleados = async (req,res,next) => {
    try {
        let nombreQuery = req.params.nombre
        let all = await Empleado.find({Nombre:nombreQuery}); 
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)

    } 
}

let cargoEmpleados = async (req, res,next) => {
    try {
        let cargoQuery = req.params.y;
        let all = await Empleado.find({Cargo:cargoQuery }); 
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error)

    }
}

export {allEmpleados,nombreEmpleados,cargoEmpleados}