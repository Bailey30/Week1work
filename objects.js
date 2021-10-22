//activity 1

// const person = {
//     name: "alex",
//     age: 30,
//     favSongs: [
//         "macarena",
//         "night fever",
//         "tiny dancer"
//     ],
//     nameFunc() {
//         return person.name;
//     },
//     sayHi() {
//         console.log(`hello my name is ${this.name}`);
//     }

// }
// // person.favSongs[2] = "baby"
// // console.log(person.favSongs[2]);

// // console.log(person.nameFunc())

// person.sayHi()

// activity 2 - pet object

// const pet = {
//     name: "craig",
//     typeOfPet: "cat",
//     age: 20,
//     colour: "blue",
//     eat() {
//         console.log(`${this.name} is eating`);
//     },
//     drink() {
//         console.log(`${this.name} is drinking`);
//     }
// }

// pet.eat()
// pet.drink()

// activity 3 - coffee shop
let order1 = []
let order2 = []
const coffeeShop = {
    branch: "wood",
    drinks: [
        ["water"],
        ["1.5"],
        ["iced water"],
        ["2.5"],
        ["tea"],
        ["2"]
    ],
    food: {
        bread: 1,
        rice: 2
    },
    drinksOrdered(drink1, drink2) {

        // take items from array object and put into another array
        let result = coffeeShop.drinks.map(element => element.join())

        let result2 = coffeeShop.drinks.map(element => element)

        let i3 = result2.indexOf(drink1)

        let i1 = result.indexOf(drink1)
        let i2 = result.indexOf(drink2)
        let m1 = result.indexOf(drink1) + 1
        let m2 = result.indexOf(drink2) + 1

        let price = (parseFloat(result[m1])) + (parseFloat(result[m2]))

        console.log(`your order is ${result[i1]} and ${result[i2]}. your total is ${price}`);


    },
    foodOrdered() {
        const object = this.food
        for (const property in object) {
            console.log(`${property}: ${object[property]}`);
        }

    }
}
console.log(coffeeShop.drinksOrdered("iced water", "water"))
coffeeShop.foodOrdered()