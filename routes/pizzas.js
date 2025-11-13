const express = require('express')
const router = express.Router()



// Import the controller

const pizzaController = require('../controllers/pizzaController')

/* CRUD OPERATIONS ON ENTITY PIZZA 
- sostituisco app.get con router.get
-elimino la parte di URI /API/PIZZAS,perchè andrà utilizzata solo nel file server.js, altrimenti verrà identificata come una ripetizione)
*/


// INDEX

router.get('/', pizzaController.index)

//SHOW

router.get('/:id', pizzaController.show)

//store

router.post('/', pizzaController.store)

// update

router.put('/:id', pizzaController.update)

// modify

router.patch('/:id', pizzaController.modify)

//destroy

router.delete('/:id', pizzaController.destroy)

module.exports = router