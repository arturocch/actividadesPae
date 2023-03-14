const express = require('express')
const rutas = require('./rutas')
const routes = require('./src/routes')
const { engine } = require('express-handlebars')
const mongoose = require('mongoose')
require('dotenv').config()

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggercong = require('./swagger.config')




const app = express()

const mongurl = process.env.MONGO_URL


// uso del engine, vaiables de configuracion de la aplicacion
app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))
app.set('view engine', 'handlebars')
app.set('views', './src/views')

const port = process.env.PORT || 3000

const swaggerDocs = swaggerJsDoc(swaggercong)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

rutas(app);
app.use('', routes)

mongoose.connect(mongurl)
    .then(() => {
        console.log('se conecto correctamente a la base de datos')
        app.listen(port, function() {
            console.log('app is running in port ' + port)
        })
    })
    .catch(err => {
        console.log('no se pudo conectar a la base de datos', err)
    })