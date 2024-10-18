import {Schema,model} from "mongoose";


let collection = 'productos'
let schema = new Schema({
    Nombre: {type:String,require:true},
    Marca: {type:String,require:true},
    Tipo: {type:String,require:true},
    Precio: {type:Number,require:true},
},{
    timestamps:true
})

let Producto = model(collection,schema)
export default Producto