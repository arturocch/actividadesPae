const express = require('express')
const router = express.Router()
    //middlewares va entre ruta y funcion

router.post('', function(req, res) {
    res.send('usuario creado')
})

router.put('/:id', function(req, res) {

    res.send('usuario actualizado correctamente')
})

router.get('', function(req, res) {
    res.send('lsita de usuarios')
})

router.get('/:id', function(req, res) {
    const id = req.params.id
    res.send('detalles del usuario ' + id)
})

module.exports = router