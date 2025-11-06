import {Router} from "express";
import userController from "../controllers/users.controller.js";


const usersRoutes=Router();

usersRoutes.get("/",userController.getAll);
usersRoutes.post("/registro",userController.createOne);
usersRoutes.post("/login",userController.login);

export default usersRoutes;


