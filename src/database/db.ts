import { Database } from 'sqlite3';


export const db : Database = new Database('admidEventos.db', err =>{
    
    err ? console.log('Error en la conexión de la base de datos', err.message) 
    : console.log('Conexión a la bases de datos exitosa');

});