const express = require('express')
const app = express()
const PORT = 3003
const pizzasRouter = require('./routers/pizzas')

app.use(express.static('public'))

app.listen(PORT, () => {

    console.log(`PIZZERIA API server started on http://localhost:${PORT}`);

})



const drinks = [
    {
        id: 1,
        name: "Fruit Juice",
        images: "imgs/coca_cola.jpeg",
        price: 2
    },
    {
        id: 2,
        name: "Apple Juice",
        images: "imgs/apple_juice.jpeg",
        price: 3
    },
    {
        id: 4,
        name: "Water",
        images: "imgs/water.jpeg",
        price: 1
    }
]


// Pizzeria API server Routes

app.get('/', (req, res) => {

    res.send('Welcome to Pizzeria server API')
})




// CRUD OPERATIONS ON ENTITY pizzas

app.use('/api/pizzas', pizzasRouter)


// CRUD OPERATIONS ON ENTITY DRINKS

//index
app.get('/api/drinks', (req, res) => {
    res.json(drinks)
})

//show

app.get('/api/drinks/:id', (req, res) => {
    res.send('show the single drink ID:' + req.params.id)
})

//store
app.post('/api/drinks', (req, res) => {
    res.send('Create new drink')
})

//Update
app.put('/api/drinks/:id', (req, res) => {
    res.send('update drink ID:' + req.params.id)
})

//modify 

app.patch('/api/drinks/:id', (req, res) => {
    res.send('partially update drink id:' + req.params.id)
})

//destroy

app.delete('/api/drinks/:id', (req, res) => {
    res.send('Deletedrink ID:' + req.params.id)
})