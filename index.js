// Ejercicios JS 

const pizzas = [
    {
        id: 1,
        nombre:"Muzzarella",
        ingredientes:["Queso", "Salsa de Tomate"],
        precio: 100
    },
    {
        id: 2,
        nombre:"Fugazzetta",
        ingredientes:["Queso", "Cebolla"],
        precio: 150
    },
    {
        id: 3,
        nombre:"Jamon y Morron",
        ingredientes:["Queso", "Jamon", "Morron"],
        precio: 150
    },
    {
        id: 4,
        nombre:"Napolitana",
        ingredientes:["Queso", "Tomate", "Jamon"],
        precio: 150
    },
    {
        id: 5,
        nombre:"Primavera",
        ingredientes:["Queso", "Tomate", "Huevo"],
        precio: 200
    },
    {
        id: 6,
        nombre:"Vegeteriana",
        ingredientes:["Queso", "Espinaca", "Salsa Blanca"],
        precio: 200
    },
];

///////// Ejercicio a)  ///////////

///Primer ejemplo
// a1(pizzas.forEach((e) => {
//     if(e.id % 2 !== 0) {
//         console.log(`La Pizza ${e.nombre} es un impar y esta buenarda`);
//     }
// })
// );

/// EJEMPLO 2 

// const elverdaderopar = pizzas.reduce((emptybox, pizza) => {
//     pizza.id % 2 !== 0 ? emptybox.push(pizza) : null;
//     return emptybox
// }, []);
// console.log(elverdaderopar)



///////// Ejercicio b) ///////////

// const laqueMenosVale = pizzas.some(function(e){
//     return  e.precio <= 13
// });
// console.log(laqueMenosVale ? 'Pero mas vale que hay pizzas menores a 13' : 'No existen pizzas con ese valor')


///////// Ejercicio c)

// pizzas.forEach((e) => console.log(`La Pizza ${e.nombre} tiene un precio de : $${e.precio}`))


////// Ejercicio d)




// pizzas.forEach ((pizza) => {
//     console.log(`La Pizza ` + pizza.nombre + ` tiene los siguientes ingredientes :`)
//     pizza.ingredientes.forEach ((ingrediente) => {
//         console.log(`   - ${ingrediente}`)
//     })
// })



// const ingredientesDePizzas = pizzas.map ((pizza) => {
//     return {nombre: pizza.nombre, ingrediente: pizza.ingredientes}
// },)

// const checkingPizzas = pizzas.reduce ((acc, pizza) => {
//     return pizza.nombre 
	

// },);




//// intento trunco de Reduce() ,,, f por mi //// voy a seguir intentando!

// const ingredientesDePizzas = pizzas
//     pizzas.map (())
//     pizzas.reduce((cositodelapizza, pizza) => cositodelapizza + pizza,[]);
//     console.log(ingredientesDePizzas)

