import express from 'express'

import StudentsRouter from './routes/students.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.SERVER_PORT || 3001;

//init express app
const app = express()

//middleware
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send({ msg: "root level" })
})

app.use('/students', StudentsRouter)




//server
app.listen(PORT, () => console.log(`Server läuft auf Port: ${PORT}`))

