const { Server } = require('socket.io')

const init = (httpServer) => {
    //VERIFICACIÓN http://localhost:8080/socket.io/socket.io.js
    const io = new Server(httpServer)

    //CADA VES QUE SE CONECTA UN CLIENTE
    io.on('connection', socket => {
        console.log(`Nuevo cliente conectado: ${socket.id} 👌`)
    })

    return io
}

//EXPORTA UNA FUNCIÓN
module.exports = init