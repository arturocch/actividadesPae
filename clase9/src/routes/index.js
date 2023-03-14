const router = require('express').Router()
const rutasTareas = require('./tareas')
const rutasUsuarios = require('./usuarios')
const auth = require('./../middlewares').auth

router.use('', auth)

router.use('/tareas', rutasTareas)
router.use('/usuarios', rutasUsuarios)

router.get('*', function(req, res) {
    res.status(404).send('pagina no encontrada')

})

module.exports = router