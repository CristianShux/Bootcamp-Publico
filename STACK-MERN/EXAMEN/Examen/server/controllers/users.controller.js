import { User } from "../models/Users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.SECRET;

const userController = {
  getAll: async (req, res) => {
    try {
      const allUsers = await User.find();
      return res.status(201).json(allUsers);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
   createOne : async (req,res) => {
        const {firstName, lastName, email, password, passwordConfirmation} = req.body;
        const newArray = {firstName, lastName, email, password, passwordConfirmation};
        const hayUsuario= await User.findOne({email});
        if(hayUsuario){
          return res.status(401).json({errors:{email:"Ese mail ya existe"}});
        }
        try{
            const newUser = await User.create(newArray);
            const saveToken = {
                email: newUser.email,
                id : newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName
            };
            jwt.sign(saveToken,SECRET, {expiresIn : "15m"}, (err,token)=> {
                return res.status(201).json({token})
            });
        }catch(e){
            const messages = {};
            if(e.name === "ValidationError"){
                Object.keys(e.errors).forEach(key => {
                    messages[key] = e.errors[key].message;
                });
                
            }
            return res.status(400).json({errors: {...messages}})
        }

    },
     login : async (req,res)=> {
        const {email, password} = req.body;
        if(!email && !password){
          return res.status(401).json({errors:{
            email:"El correo es necesario",
            password:"La contrseña es necesaria"
          }});
        }
        if(!email){
          return res.status(401).json({errors:{email:"El correo es necesario"}});
        }
        if(!password){
          return res.status(401).json({errors:{password:"La contraseña es necesaria"}});
        }

        const currentUser = await User.findOne({email});
        if(!currentUser){
            return res.status(404).json({errors : {email : "Ese email no existe"}});
        }
        const bcryptResponse = await bcrypt.compare(password, currentUser.password);

        if(!bcryptResponse){
            return res.status(404).json({errors : {password : "Las credenciales no son correctas"}});
        }

        const saveToken = {
                email: currentUser.email,
                id : currentUser._id,
                firstName : currentUser.firstName,
                lastName : currentUser.lastName
            };
        jwt.sign(saveToken,SECRET, {expiresIn : "15m"}, (err,token)=> {
                return res.status(201).json({token})
            });

    }
};

export default userController;
