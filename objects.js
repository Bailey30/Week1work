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
        ["water"], ["1.5"],
        ["iced water"], ["2.5"] ,
        ["tea"], ["2"]
    ],
    food: {
        bread: 1,
        rice: 2
    },
    drinksOrdered(drink1, drink2) {
        
       // take items from array object and put into another array
        let result = coffeeShop.drinks.map(element => element.join())
        // join that array into one string
        // let joined = result.join()
        // //check if string contains ordered drink
        // if (joined.indexOf(drink1) > -1 && joined.indexOf(drink2) > -1){
        //     order1.push(drink1)
        //     order1.push(drink2)
        // }
        let result2 = coffeeShop.drinks.map(element => element)
        console.log(result);
        let i3 = result2.indexOf(drink1)
        console.log(i3);


        let i1= result.indexOf(drink1)
        let i2 = result.indexOf(drink2)
        let m1= result.indexOf(drink1)+1
        let m2 = result.indexOf(drink2)+1
        // console.log(parseFloat(result[m1]));
        // console.log(result[m2]);
        // console.log(munny);
        // console.log(coffeeShop.drinks.indexOf("tea"));
        // console.log(result);
        // console.log(joined);
        // console.log(order1);
        // console.log(order2);
        
        // drink index+1 for price index

        // extract numbers from string and make array
        // let result2 = joined.match(/\d+/g).map(Number)
        //method doesnt work with decimal numbers or if there are more than two menu items 
        let price = (parseFloat(result[m1])) + (parseFloat(result[m2]))
        // console.log(result2);
        // console.log(price);
        console.log(`your order is ${result[i1]} and ${result[i2]}. your total is ${price}`);
        /////save this
        // let price = (coffeeShop.drinks[0][1] + coffeeShop.drinks[1][1]);
        // return `your order is a ${coffeeShop.drinks[0][0]} £${coffeeShop.drinks[0][1]} and ${coffeeShop.drinks[1][0]} £${coffeeShop.drinks[1][1]}.  Your total is £${price}`
        /////


    }
}
console.log(coffeeShop.drinksOrdered("iced water", "tea"))
// console.log(coffeeShop.drinksOrdered(coffeeShop.drinks[0][0], coffeeShop.drinks[1]))

// console.log(coffeeShop.drinks.reduce((coffeeShop.drinks[0][1], coffeeShop.drinks[1][1]) => coffeeShop.drinks[0][1] + coffeeShop.drinks[1][1] ));

//push items ordered parameters into array
//loop through array
//check data type with if statement push into another array


// sum of those values