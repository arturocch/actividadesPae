const tarea = require('./../models/tarea')

const tareasController = {
    listaTareas: (req, res) => {
        tarea.find({})
            .then(response => {
                //console.log(req)
                console.log(response)
                res.render('tareas', { tareas: response })
            })
            .catch(error => {
                res.status(400).send('algo salió mal')
            })
    },
    crearTarea: (req, res) => {
        console.log(req.body)
        res.send('tarea creada')
    },
    actualizarTarea: (req, res) => {
        res.send('tarea actualizada')
    },
    tareaEsp: (req, res) => {
        const id = req.params.id
        res.send('tarea visualizada ' + id)
    }
}


module.exports = tareasController

//ejemplo de otra forma para exportar objetos, asi mismo podria exportarse una clase con metodos estaticos

const controlladorTareas = {
    crearTareaEj: (req, res) => {
        console.log(req.body)
        res.send('tarea creada')
    },
    actualizarTareaEj: (req, res) => {
        res.send('tarea actualizada correctamente')
    },
}