import { Router } from "express";
import {allProductos,nombreProductos,tipoProductos} from "../controllers/productos/read.js";
import { create,manyCreate } from "../controllers/productos/create.js";

const router = Router()

router.get('/all', allProductos)
router.get('/nombre', nombreProductos)
router.get('/tipo/:x', tipoProductos)
router.post('/create', create)
router.post('/manycreate', manyCreate)


export default router