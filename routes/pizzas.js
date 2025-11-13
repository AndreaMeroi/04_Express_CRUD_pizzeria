const express = require('express')
const router = express.Router()

// import menu from Data

const menu = require('../data/menu')

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
            error: true,
            message: 'Resource not found'
        })
    }
    res.json(pizza)
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