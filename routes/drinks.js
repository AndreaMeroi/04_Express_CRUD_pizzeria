const express = require('express')
const router = express.Router()

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

/* CRUD OPERATIONS ON ENTITY DRINKS
- sostituisco app.get con router.get
-elimino la parte di URI /API/DRINKS,perchè andrà utilizzata solo nel file server.js, altrimenti verrà identificata come una ripetizione)
*/


//index
router.get('/', (req, res) => {
    res.json(drinks)
})

//show

router.get('/:id', (req, res) => {
    res.send('show the single drink ID:' + req.params.id)
})

//store
router.post('/', (req, res) => {
    res.send('Create new drink')
})

//Update
router.put('/:id', (req, res) => {
    res.send('update drink ID:' + req.params.id)
})

//modify 

router.patch('/:id', (req, res) => {
    res.send('partially update drink id:' + req.params.id)
})

//destroy

router.delete('/:id', (req, res) => {
    res.send('Deletedrink ID:' + req.params.id)
})

module.exports = router