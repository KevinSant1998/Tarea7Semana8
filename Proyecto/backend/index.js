import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'
import usersRoutes from './routes/usersRoutes.js'

// Cargar variables de entorno
dotenv.config()

// Configurar la app
const app = express()

// Leer datos via body (JSON)
app.use(express.json())

// Conectar a la base de datos
db()

// CORS: permitir solo frontend autorizado
const whitelist = [process.env.FRONTEND_URL]

if (process.argv[2] === '--postman') {
  whitelist.push(undefined) // permitir Postman u origen sin definir
}

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Error de CORS: origen no permitido'))
    }
  },
  credentials: true
}

app.use(cors(corsOptions))

// Rutas
app.use('/api/services', servicesRoutes)
app.use('/api/users', usersRoutes)

// Puerto
const PORT = process.env.PORT || 4002

// Iniciar servidor
app.listen(PORT, () => {
  console.log(colors.blue(`🚀 Servidor backend corriendo en http://localhost:${PORT}`))
})
