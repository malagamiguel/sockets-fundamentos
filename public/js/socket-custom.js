var socket = io();

// Conexion con el servidor
socket.on("connect", function () {
  console.log("Conectado al servidor");
});
// Desconexion con el servidor
socket.on("disconnect", function () {
  console.log("Perdimos la conexion con el servidor");
});

// Emitir un mensaje al servidor
socket.emit(
  "enviarMensaje",
  {
    usuario: "Miguel",
    mensaje: "Hola mundo",
  },
  function (resp) {
    console.log("Respuesta server: ", resp);
  }
);

// Escuchar informacion del servidor
socket.on("enviarMensaje", function (respuesta) {
  console.log("Servidor: ", respuesta);
});
