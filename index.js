const express = require('express')
const morgan = require('morgan')
const app = express()
const port  = 3000

app.use(morgan('combined'))


app.get('/', (req, res) => {
    res.send(`
        <h1>Hello World</h1>
    `)
})

app.get('/home', (req, res) => res.send('My blog page'))

app.listen(port, () => console.log(`Example app listeing at http://localhost:${port}`))
