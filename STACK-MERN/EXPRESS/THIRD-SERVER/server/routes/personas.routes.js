import { Router } from "express";
import controladorPersona from "../controllers/personas.controller.js";

const routePersona=Router();

routePersona.get("/",controladorPersona.obtenerTodos);

routePersona.post("/",controladorPersona.crearPersona);

routePersona.get("/:name",controladorPersona.buscarPerson);

export default routePersona;
