import { Router } from "express";
import { db } from "../../database/db";
import { Request, Response } from "express";

const router: Router = Router();

//Ruta para registrar eventos
router.post('/eventos/:idEvento',(request : Request, response : Response)=>{

    const { idEvento } = request.params;
    const { nombreEvento, fechaInicio, fechaFin, descripcion, ubicacion } = request.body;

    db.run('INSERT INTO Evento(idEvento,nombreEvento, fechaInicio, fechaFin, descripcion, ubicacion ) VALUES (?,?,?,?,?,?)',
        [idEvento,nombreEvento, fechaInicio, fechaFin, descripcion, ubicacion],
        (err: Error)=>{
            err ? response.status(500).json({ message : err.message})
            : response.status(201).json({ message : 'Evento registrado correctamente'});
        }
    );
});

//Ruta que obtiene un evento por su id
router.get('/unevento',(request: Request, response : Response)=>{

    const { idEvento } = request.query;

    db.get('SELECT * FROM Evento WHERE idEvento = ?',[idEvento],
        (err: Error, row : {}) =>{
            err ? response.status(500).json({ message : err.message})
            : response.status(200).json({ data : row});
        }
    )
});

//Ruta que obtiene todos los eventos
router.get('/alleventos',(request : Request, response : Response)=>{

  db.all('SELECT * FROM Evento',(err : Error, rows : [])=>{
    err ? response.status(500).json({ message : err.message})
    : response.status(200).json({ data : rows});
  })
});

//Ruta que actualiza un evento por su id
router.put('/eventos',(request : Request, response : Response)=>{

  const  idEvento  = request.header('idEvento');
  const { nombreEvento, fechaInicio, fechaFin, descripcion, ubicacion } = request.body;

  db.run('UPDATE Evento SET nombreEvento = ?, fechaInicio = ?, fechaFin = ?, descripcion = ?, ubicacion = ? WHERE idEvento = ? ',
    [nombreEvento, fechaInicio, fechaFin, descripcion, ubicacion,idEvento],
    (err : Error)=>{
      err ? response.status(500).json({ message : err.message})
      : response.status(200).json({ message : 'Evento actualizado exitosamente'});
    }
  );

});

//Ruta que permite actualizar la fechaFin y ubicación de un evento por su id
router.patch('/eventos/:idEvento',(request : Request, response : Response)=>{

  const { idEvento } = request.params;
  const { fechaFin,  ubicacion } = request.body;

  db.run('UPDATE Evento SET fechaFin = ?, ubicacion = ? WHERE idEvento = ? ',
    [fechaFin,  ubicacion,idEvento],
    (err : Error)=>{
      err ? response.status(500).json({ message : err.message})
      : response.status(200).json({ message : 'El evento ha sido actualizado'});
    }
  );
});

//Ruta que elimina un evento por su id
router.delete('/deletevento',(request : Request, response : Response)=>{

  const { idEvento } = request.body;

  db.run('DELETE FROM Evento WHERE idEvento = ?', [idEvento],
    (err)=>{
      err ? response.status(500).json({ message : err.message})
      : response.status(200).json({ message : 'El evento ha sido eliminado exitosamente'});
    }
  );
});

export default router;