const express = require('express')
const router = express.Router()
const controller = require('./../controllers/tareas')
    //middlewares va entre ruta y funcion
    /**
     * @swagger
     * /tareas:
     *  post:
     *    description: crear una nueva tarea
     *    parameters: 
     *      - in: body
     *        name: titulo
     *        description: el titulo de la tarea
     *        schema: 
     *          type: string
     *    responses:
     *      200: 
     *        description: lista de tareas del usuario 
     */
router.post('', express.json(), controller.crearTarea)

router.put('/:id', controller.actualizarTarea)

router.get('', controller.listaTareas)

router.get('/:id', controller.tareaEsp)




module.exports = router