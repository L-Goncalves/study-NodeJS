import express, {Request, Response, NextFunction} from 'express';
import statusRoutes from './routes/status.route';
import usersRoute from './routes/users';



const PORTA = 3000;
const app = express();
// Configs
app.use(express.json())
// Rotas 
app.use(usersRoute)
app.use(statusRoutes)

// Start
app.listen(PORTA, () => {
    console.log('App está na porta: ', PORTA)
})