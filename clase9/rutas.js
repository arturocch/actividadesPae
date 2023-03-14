const path = require('path')
const express = require('express')
const authMiddleware = require('./src/middlewares/').auth


function cargarHome(req, res) {

    console.log('api works')
    res.render('home', { nombre: 'pepito' })
        //const ruta = path.join(__dirname, 'src', 'views', 'index.html')
        //res.sendFile(__dirname + '/vistas/index.html')
        // res.sendFile(ruta)


}
//la funcion no sabe y no le importa que sigue, al utilizar next solo ejecutara la siguiente funcion en el get


module.exports = function(app) {

    app.use('/assets', express.static(path.join(__dirname, 'assets')))

    // los parametros de funciones que le pasemos al get ser iran ejectuando en orden, el que este mas hasta la derecha es el endpoint
    app.get('/', authMiddleware, cargarHome)

    //app.get('/usuarios', middleware, function(req, res) {
    //    console.log(req.query.usuario)
    //   res.send(req.query)
    //})

    //poner hasta el final porque si no lo toma siempre, toma el primer endpoint 

}