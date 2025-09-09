// importo express y funcionalidades especificas
import express, {Application, Request, Response, NextFunction} from 'express';

// importamos las rutas 
import quotesRouter from './routes/quotes-routes'

// importamos middleware
import {errorMiddleware} from './middlewares/error-middleware'

// creamos instancia de app en express
const app: Application = express()

// configuramos rutas principales
app.use('/api/quotes', quotesRouter)

// Middleware para manejar solis a rutas que no existan en la api
app.use((req: Request, res:Response) => {
    res.status(404).json({error: 'Endpoint no encontrado'})
})

// middleware global para manejar errores
app.use(errorMiddleware)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);  
})