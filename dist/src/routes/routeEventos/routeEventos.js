"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../../database/db");
const router = (0, express_1.Router)();
router.post('/eventos/:idEvento', (request, response) => {
    const { idEvento } = request.params;
    const { nombreEvento, fechaInicio, fechaFin, descripcion, ubicacion } = request.body;
    db_1.db.run('INSERT INTO Evento(idEvento,nombreEvento, fechaInicio, fechaFin, descripcion, ubicacion ) VALUES (?,?,?,?,?,?)', [idEvento, nombreEvento, fechaInicio, fechaFin, descripcion, ubicacion], (err) => {
        err ? response.status(500).json({ message: err.message })
            : response.status(201).json({ message: 'Evento registrado correctamente' });
    });
});
exports.default = router;
