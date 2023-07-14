const express = require('express')
const handlebars = require('express-handlebars')
const socketServer = require('../src/utils/io')

const productsRouter = require('./routers/productsRouter')
const cardsRouter = require('./routers/cartsRouter')
const viewsRouter = require('./routers/viewsRouter')

const PORT = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('../src/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', '../src/views')
app.set('view engine', 'handlebars')

const httpServer = app.listen(PORT, () => { console.log(`Servidor corriendo en el puerto ${PORT}`) })
const io = socketServer(httpServer)

app.use('/api/products', productsRouter)
app.use('/api/cards', cardsRouter)
app.use('/', viewsRouter)