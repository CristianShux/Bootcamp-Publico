import express from 'express'
import dotenv from 'dotenv'
import toConnectToBd from './config/database.js'
import recetasRoutes from './routes/recetas.route.js'
import usersRoutes from './routes/users.route.js'
import cors from 'cors'


dotenv.config()


const app = express()
const PORT = process.env.PORT || 8080;



// middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())


toConnectToBd()


app.use('/api/recetas', recetasRoutes );
app.use('/api/users', usersRoutes);

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})