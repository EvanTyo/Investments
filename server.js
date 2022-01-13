const express = require('express')
const app = express()

// process.env.PORT || 3000
const port = 8000

// middleware
app.use(express.json())

// routing
const routers = require('./routes/investmentsRouter.js')
app.use('/investments', routers)

app.get('/', (req, res) => {
    res.send('Investments.')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})