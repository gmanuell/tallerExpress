import { Router } from "express";
import tiendaRouter from './tiendas.js'
import empleadoRouter from './empleados.js'
import productoRouter from './productos.js'



const router = Router()

router.use('/tiendas', tiendaRouter)
router.use('/productos', productoRouter)
router.use('/empleados', empleadoRouter)

export default router