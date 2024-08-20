import { Router } from "express";
import { db } from "../../database/db";
import { Request, Response } from "express";

const router: Router = Router();

router.post('/eventos/:idEvento',(request : Request, response : Response)=>{

    const { idEvento } = request.params;
    const { nombreEvento, fechaInicio, fechaFin, descripcion, ubicacion } = request.body;

    db.run('INSERT INTO Evento(idEvento,nombreEvento, fechaInicio, fechaFin, descripcion, ubicacion ) VALUES (?,?,?,?,?,?)',
        [idEvento,nombreEvento, fechaInicio, fechaFin, descripcion, ubicacion],
        (err: Error)=>{
            err ? response.status(500).json({ message : err.message})
            : response.status(201).json({ message : 'Evento registrado correctamente'})
        }
    );
});

export default router;