import { Request, Response } from 'express';
import { Router } from 'express';
import { db } from '../../database/db';

const router: Router = Router();

router.post('/participantes', (request: Request, response: Response) => {
  const { idParticipante } = request.query;
  const { nombreParticipante, email, telefono } = request.body;
  const idEvento = request.header('idEvento');  
  const query =
    'INSERT INTO Participante(idParticipante,nombreParticipante, email, telefono,idEvento) VALUES(?,?,?,?,?)';

  db.run(query,[idParticipante,nombreParticipante,email,telefono,idEvento],
    (err: Error) => {
      if (err) {
        response.status(500).json({ message: err.message });
      } else {
        response.status(201).json({ message: 'Participante registrado correctamente' });
      }
    }
  );
});

export default router;
