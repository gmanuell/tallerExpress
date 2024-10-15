import {Schema,model} from "mongoose";


let collection = 'users'
let schema = new Schema({
    Nombre: {type:String,require:true},
    Dirección: {type:String,require:true},
    Teléfono: {type:Number,require:true},
},{
    timestamps:true
})

let User = model(collection,schema)
export default User
