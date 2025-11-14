// import menu from Data

const menu = require('../data/pizzasMenu')

//INDEX

const index = (req, res) => {

    // res.send ('show a filtered list of pizzas')

    console.log(req.query.ingredient);
    // variabile filtered_menu che se non ci sono filtri attivi è uguale a menu stesso (uso let perchè dovrà poter essere modificata)

    let filtered_menu = menu

    if (req.query.ingredient) {
        filtered_menu = menu.filter(pizza => pizza.ingredients.includes(req.query.ingredient))
    }
    console.log(filtered_menu);


    res.json(filtered_menu)
}

//SHOW

const show = (req, res) => {

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
}

// STORE

const store = (req, res) => {

    console.log(req.body);

    //genero il nuovo ID
    const newPizzaID = menu[menu.length - 1].id + 1
    console.log(newPizzaID);


    //destrutturo l'oggetto 
    const { name, image, ingredients } = req.body
    //genero il nuovo oggetto

    const newPizza = {
        id: newPizzaID,
        name,
        image,
        ingredients
    }
    console.log(newPizza);

    // pusho il nuovo oggetto

    menu.push(newPizza)
    console.log(menu);

    //aggiorno lo status code con 201 (resource createde) 

    res.status(201).json(newPizza)
}
//UPDATE

const update = (req, res) => {

    //destrutturazione per trovare l'ID

    const { id } = req.params

    console.log(id);

    const pizza = menu.find(item => item.id === parseInt(id))
    console.log(pizza);

    // set a res in case of item missing

    if (!pizza) {

        //concateno status(404) per modificare il codice i postman che altrimenti continuerebbe a proporre 200 OK

        res.status(404).json({
            error: true,
            message: 'Resource not found'
        })
    }
    // aggiorno la pizza 

    const { name, image, ingredients } = req.body

    pizza.name = name
    pizza.image = image
    pizza.ingredients = ingredients

    console.log(menu);


    res.json(pizza)

}


// MODIFY

const modify = (req, res) => {

    //destrutturazione per trovare l'ID

    const { id } = req.params

    console.log(id);

    const pizza = menu.find(item => item.id === parseInt(id))
    console.log(pizza);

    // set a res in case of item missing

    if (!pizza) {

        //concateno status(404) per modificare il codice i postman che altrimenti continuerebbe a proporre 200 OK

        res.status(404).json({
            error: true,
            message: 'Resource not found'
        })
    }
    // aggiorno la pizza 

    const { name, image, ingredients } = req.body

    pizza.name = name
    pizza.image = image
    pizza.ingredients = ingredients

    console.log(menu);


    res.json(pizza)

}

//DESTROY

const destroy = (req, res) => {

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
    /* utilizzo splice per RIMUOVERE la pizza selezionata (splice ha bisogno di 2 elementi: (INDEX selezionata dall'INDEX OF e
   la QUANTITà INDICATA dopo la virgola CON 1 perchè deve eliminare SOLO 1 elemento)*/

    menu.splice(menu.indexOf(pizza), 1)
    console.log(menu);

    //se dovessi ripetere la richiesta di eliminare una pizza che già è stata eliminata sendStatus204 chiude la richesta
    res.sendStatus(204)

}

//esporto tutto con un oggetto (siccome la relazione chiave/valore per tutti è uguale posso scrivere solo il valores ) 

module.exports = {

    index,
    show,
    store,
    update,
    modify,
    destroy
}