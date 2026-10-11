const mongoose = require('mongoose');

const connect = async () => {
    try {
        const db = await mongoose.connect("mongodb://localhost:27017/peliculas");
        console.log(`Conectado a la base de datos con éxito: ${db.connection.name}`);
    } catch (error) {
        console.log("Error al conectar a la base de datos:", error);
    }
};

module.exports = { connect };