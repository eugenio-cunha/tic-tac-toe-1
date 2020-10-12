'use strict';

const app = require('./app');

app.init(err => {
    if (err) throw err;
    console.info(`Servidor Iniciado! http://localhost:${process.env.HTTP_PORT || 3000}`);
});