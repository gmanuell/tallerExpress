import { Router } from "express";
import {allEmpleados,nombreEmpleados,cargoEmpleados} from "../controllers/empleados/read.js";
import { create,manyCreate } from "../controllers/empleados/create.js";

const router = Router()

router.get('/all', allEmpleados)
router.get('/nombre', nombreEmpleados)
router.get('/cargo/:y', cargoEmpleados)
router.post('/create', create)
router.post('/manycreate', manyCreate)

export default router