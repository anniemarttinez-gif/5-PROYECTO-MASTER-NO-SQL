const express = require('express');
const { connect } = require('./src/utils/db');
const movieRoutes = require('./src/api/routes/movie.routes');

const server = express();
const PORT = 3000;

connect();


server.use(express.json());
server.use(express.urlencoded({ extended: false }));


server.use('/movies', movieRoutes);

server.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});