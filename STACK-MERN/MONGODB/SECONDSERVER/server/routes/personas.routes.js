import { Router } from "express";
import controladorPersona from "../controllers/personas.controller.js";

const routePersona=Router();

routePersona.get("/",controladorPersona.obtenerTodos);

routePersona.post("/",controladorPersona.crearPersona);

routePersona.get("/:name",controladorPersona.buscarPersona);

routePersona.delete("/:name",controladorPersona.borrarPersona);

routePersona.put("/:name",controladorPersona.actualizarPersona);

export default routePersona;
