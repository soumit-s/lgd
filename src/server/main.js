const express = require('express')

class Server {
  constructor() {
    this.app = express()

    this.info = {
      port: 3000
    }
    
    this.init()
  }

  init() {
    this.app.use('/dist', express.static('dist'))
    this.app.use('/', express.static('public'))
  }

  start() {
    this.app.listen(this.info.port, () => {
      console.log(`Starting server at localhost:${this.info.port}`)
    })
  }
}

let server = new Server()
server.start()