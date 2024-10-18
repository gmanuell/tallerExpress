import { Router } from "express";
import {allTiendas,nombreTiendas,direccionTiendas} from "../controllers/tiendas/read.js";
import { create,manyCreate } from "../controllers/tiendas/create.js";

const router = Router()

router.get('/all', allTiendas)
router.get('/nombre', nombreTiendas)
router.get('/direccion', direccionTiendas)
router.post('/create', create)
router.post('/manycreate', manyCreate)






export default router