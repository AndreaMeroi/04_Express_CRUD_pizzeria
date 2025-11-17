const express = require('express')
const app = express()
const PORT = 3003
const pizzasRouter = require('./routes/pizzas')
const drinksRouter = require('./routes/drinks')
//register logTime middleware (middleware global registration)
const logTime = require('./middleware/logTime')
//register serverError middleware (middleware global registration)
const serverError = require('./middleware/serverError')
//register notFound middleware (middleware global registration)
const notFound = require('./middleware/notFound')

//register static assets (middleware global registration)
app.use(express.static('public'))
//register Body Parser for using store route (middleware global registration)
app.use(express.json())

// SERVER LOGTIME MIDDLEWARE (MIDDLEWARE)

app.use(logTime)

//indico quale porta deve 'ascoltare' il server
app.listen(PORT, () => {

    console.log(`PIZZERIA API server started on http://localhost:${PORT}`);

})





// Pizzeria API server Routes

app.get('/', (req, res) => {

    res.send('Welcome to Pizzeria server API')
})




// CRUD OPERATIONS ON ENTITY pizzas

app.use('/api/pizzas', pizzasRouter)


// CRUD OPERATIONS ON ENTITY DRINKS

app.use('/api/drinks', drinksRouter)

// SERVER ERROR MIDDLEWARE (MIDDLEWARE)

app.use(serverError)

// SERVER NOTFOUND MIDDLEWARE (MIDDLEWARE)

app.use(notFound)
