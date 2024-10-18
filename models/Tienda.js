import {Schema,model} from "mongoose";


let collection = 'tiendas'
let schema = new Schema({
    Nombre: {type:String,require:true},
    Dirección: {type:String,require:true},
    Teléfono: {type:Number,require:true},
},{
    timestamps:true
})

let Tienda = model(collection,schema)
export default Tienda
