const express = require('express')
const port = 5000
const app = express()

const mongoDB = require('./db')

mongoDB()

app.get('/', (req, res) => {
    res.send('Hello World!-----')
})

app.use(express.json());

app.use('/api/', require('./Routes/createUser'))

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

