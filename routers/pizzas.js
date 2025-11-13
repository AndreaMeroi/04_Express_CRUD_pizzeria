const express = require('express')
const router = express.router()

const menu = [
    {
        id: 1,
        name: "Margherita",
        image: "imgs/margherita.webp",
        ingredients: ["pomodoro", "mozzarella"],
    },
    {
        id: 2,
        name: "Marinara",
        image: "imgs/marinara.jpeg",
        ingredients: ["pomodoro", "aglio", "origano"],
    },
    {
        id: 3,
        name: "Diavola",
        image: "imgs/diavola.jpeg",
        ingredients: ["pomodoro", "mozzarella", "salame piccante"],
    },
    {
        id: 4,
        name: "Bufalina",
        image: "imgs/bufalina.jpeg",
        ingredients: ["pomodoro", "mozzarella di bufala"],
    },
    {
        id: 5,
        name: "4 formaggi",
        image: "imgs/4_formaggi.jpeg",
        ingredients: ["pomodoro", "mozzarella", "gorgonzola", "parmigiano", "ricotta"],
    }
]

/* CRUD OPERATIONS ON ENTITY PIZZA 
- sostituisco app.get con router.get
-elimino la parte di URI /API/PIZZAS,perchè andrà utilizzata solo nel file server.js, altrimenti verrà identificata come una ripetizione)
*/


// INDEX

router.get('/', (req, res) => {
    res.json(menu)
})

//show

router.get('/:id', (req, res) => {

    //destrutturazione per trovare l'ID

    const { id } = req.params

    console.log(id);

    const pizza = menu.find(item => item.id === parseInt(id))
    console.log(pizza);

    if (!pizza) {

        //concateno status(404) per modificare il codice i postman che altrimenti continuerebbe a proporre 200 OK

        res.status(404).json({
            error: 'NOT FOUND'
        })
    }
})

//store

router.post('/', (req, res) => {
    res.send('Create a new pizza')
})

// update

router.put('/:id', (req, res) => {
    res.send('Update the entire single pizza with ID:' + req.params.id)
})

// modify

router.patch('/:id', (req, res) => {
    res.send('Partial update for the single pizza with ID: ')
})

//destroy

router.delete('/:id', (req, res) => {
    res.send('Delete the single pizza with ID:' + req.params.id)
})

module.exports = router