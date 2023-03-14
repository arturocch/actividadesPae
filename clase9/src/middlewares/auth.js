function middleware(req, res, next) {

    console.log('pase por aqui')
    if (req.query.token === '123') {
        req.query.usuario = 'arfur'
        next()

    } else {
        res.send('no pasas')
    }

}

module.exports = middleware