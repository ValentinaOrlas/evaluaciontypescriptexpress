"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sqlite3_1 = require("sqlite3");
exports.db = new sqlite3_1.Database('admidEventos.db', err => {
    err ? console.log('Error en la conexión de la base de datos', err.message)
        : console.log('Conexión a la bases de datos exitosa');
});
