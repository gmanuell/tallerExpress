import Empleado from "../../models/Empleado.js";

let allEmpleados = async (req,res) => {
    try {
        let all = await Empleado.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return response.status(500).json({
            response: error
        })
    }
}


let nombreEmpleados = async (req,res) => {
    try {
        let nombreQuery = req.params.nombre
        let all = await Empleado.find({nombre:nombreQuery}); 
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    } 
}

let cargoEmpleados = async (req, res) => {
    try {
        let cargoQuery = req.params.y;
        let all = await Empleado.find({cargo:cargoQuery }); 
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
}

export {allEmpleados,nombreEmpleados,cargoEmpleados}