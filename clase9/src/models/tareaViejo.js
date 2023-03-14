const Tarea = {
    buscar: (filtros) => {
        const tareas = [
            { titulo: 'tarea 1', estado: 'nueva' },
            { titulo: 'tarea 2', estado: 'nueva' },
            { titulo: 'tarea 3', estado: 'en progreso' },
            { titulo: 'tarea 4', estado: 'en progreso' },
            { titulo: 'tarea 5', estado: 'en progreso' },
            { titulo: 'tarea 6', estado: 'hecha' },
            { titulo: 'tarea 7', estado: 'hecha' },
        ]

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(tareas);
            }, 1000)
        })
    }


}

module.exports = Tarea