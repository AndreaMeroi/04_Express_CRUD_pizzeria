const express = require('express')
const router = express.Router()

// import menu from Data

const menu = require('../data/pizzasMenu')

/* CRUD OPERATIONS ON ENTITY PIZZA 
- sostituisco app.get con router.get
-elimino la parte di URI /API/PIZZAS,perchè andrà utilizzata solo nel file server.js, altrimenti verrà identificata come una ripetizione)
*/


// INDEX

router.get('/', (req, res) => {

    // res.send ('show a filtered list of pizzas')

    console.log(req.query.ingredient);
    // variabile filtered_menu che se non ci sono filtri attivi è uguale a menu stesso (uso let perchè dovrà poter essere modificata)

    let filtered_menu = menu

    if (req.query.ingredient) {
        filtered_menu = menu.filter(pizza => pizza.ingredients.includes(req.query.ingredient))
    }
    console.log(filtered_menu);


    res.json(filtered_menu)
})

//SHOW

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

    //seleziono la pizza con lo stesso codice di show

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
    /* utilizzo splice per RIMUOVERE la pizza selezionata (la selezione è fatta nello stesso modo di show)
    dopo la virgola inico 1 perchè deve eliminare SOLO 1 elementoi*/

    menu.splice(menu.indexOf(pizza), 1)
    console.log(menu);

    //se dovessi ripetere la richiesta di eliminare una pizza che già è stata eliminata sendStatus204 chiude la richesta
    res.sendStatus(204)

})

module.exports = router