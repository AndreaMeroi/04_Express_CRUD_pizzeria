const express = require('express')
const app = express()
const PORT = 3003
const pizzasRouter = require('./routes/pizzas')
const drinksRouter = require('./routes/drinks')

//register static assets
app.use(express.static('public'))
//register Body Parser for using store route
app.use(express.json())
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