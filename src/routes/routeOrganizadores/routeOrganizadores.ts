import { Request, Response } from "express";
import { Router } from "express";
import { db } from "../../database/db";


const router : Router = Router();

router.post('/organizadores',(request : Request, response : Response)=>{

    const { idOrganizador } = request.query;
    const { nombreOrganizador, emailOrganizador, telefonoOrganizador} = request.body;
    const idEvento = request.header('idEvento');
    const query = 'INSERT INTO Organizadores(idOrganizador,nombreOrganizador, emailOrganizador, telefonoOrganizador,idEvento) VALUES(?,?,?,?,?)';

    db.run(query,[ idOrganizador,nombreOrganizador, emailOrganizador, telefonoOrganizador, idEvento],(err: Error)=>{
      if(err){
        response.status(500).json({ message : err.message});
      }else{
        response.status(201).json({ message : 'Organizador registrado correctamente'});
      }
    });

});

export default router;