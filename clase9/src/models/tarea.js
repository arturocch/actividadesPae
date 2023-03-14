const { Schema, model } = require('mongoose')


const tareaSchema = new Schema({
    titulo: { type: String },
    desripcion: { type: String },
    status: { type: String, default: 'new' }
})

module.exports = model('tareas', tareaSchema)