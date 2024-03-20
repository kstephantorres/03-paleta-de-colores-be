import { Router } from "express"
import { borrarColor, crearColor, editarColor, listaColores, obtenerColor } from "../controllers/colores.controllers.js"

const router = Router()

router.route('/colores').get(listaColores).post(crearColor)
router.route('/color/:id').get(obtenerColor).put(editarColor).delete(borrarColor)

export default router