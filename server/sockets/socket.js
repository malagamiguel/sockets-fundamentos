const { io } = require("../server");

// Conexion con el usuario
io.on("connection", (client) => {
  console.log("Usuario conectado");

  // Emitir mensaje al usuario
  client.emit("enviarMensaje", {
    usuario: "ADMIN",
    mensaje: "Bienvenido a esta aplicacion",
  });

  // Deconexion con el usuario
  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  // Escuchar al usuario
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);
    client.broadcast.emit("enviarMensaje", data);
    // -----------------------------------
    // if (data.usuario) {
    //   callback({
    //     respuesta: "Todo salio bien",
    //   });
    // } else {
    //   callback({
    //     reapuesta: "Todo salio mal!!!!!",
    //   });
    // }
    // ---------------------------------------
  });
});
