const express = require("express");
// socket
const socketIO = require("socket.io");
const http = require("http");

const path = require("path");
const app = express();
// Creamos un servidor y le incluimos la app de  express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// iniciar socketIO
// IO = esta es la configuración del backend
module.exports.io = socketIO(server);

require("./sockets/socket");

server.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
