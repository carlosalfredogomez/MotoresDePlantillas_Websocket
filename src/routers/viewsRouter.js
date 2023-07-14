const { Router } = require('express')

const viewsRouter = new Router()

//CHEQUEO DE SALUD
viewsRouter.get('/healtcheck', (req, res) => {
    return res.json({
        status: 'OK',
        date: new Date()
    })
})

//VISTA DE PRODUCTOS
viewsRouter.get('/home', (req, res) => {
    res.render('home', {
        title: "Listado de Productos"
    })
})

module.exports = viewsRouter