import {Schema,model} from "mongoose";


let collection = 'empleados'
let schema = new Schema({
    Nombre: {type:String,require:true},
    Cargo: {type:String,require:true},
    Salario: {type:Number,require:true},
},{
    timestamps:true
})

let Empleado = model(collection,schema)
export default Empleado