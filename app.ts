import express from "express";
import routeEventos from "./src/routes/routeEventos/routeEventos";
import routeOrganizadores from './src/routes/routeOrganizadores/routeOrganizadores';
import routeParticipantes from './src/routes/routePartcipantes/routeParticipantes';

const app = express();
const PORT = process.env.PORT || 10101;

app.use(express.json());

app.use('/', routeEventos);
app.use('/',routeOrganizadores)
app.use('/',routeParticipantes);

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))
.on("error", (error) => {
  throw new Error(error.message);
});

export default app;
