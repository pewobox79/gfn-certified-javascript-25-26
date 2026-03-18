import express from 'express'
import StudentsRouter from './routes/students.js'
import ProxyRouter from './routes/proxy.js'
import { PORT } from './utils/tokens.js'
import cors from 'cors'

//init express app
const app = express()

//middleware
app.use(cors())
app.use(express.json())


//routes
app.get('/', (req, res) => {
    res.send({ msg: "root level" })
})

app.use('/students', StudentsRouter)
app.use('/proxy', ProxyRouter)




//server
app.listen(PORT, () => console.log(`Server läuft auf Port: ${PORT}`))

