import express from "express";
import routeEventos from "./src/routes/routeEventos/routeEventos";

const app = express();
const PORT = process.env.PORT || 10101;

app.use(express.json());
app.use("/", routeEventos);



app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))
.on("error", (error) => {
  throw new Error(error.message);
});

export default app;
