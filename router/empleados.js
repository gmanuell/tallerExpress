import { Router } from "express";
import Tienda from "../models/Empleado.js";

const router = Router()

router.get('/all',
    async (req,res) => {
        try {
            let all = await Tienda.find()
            return res.status(200).json({
                response: all
            })
        } catch (error) {
            return response.status(500).json({
                response: error
            })
        }
    }
)

export default router