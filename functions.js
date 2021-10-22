// const age = 60
// if (age < 18 ){
//     console.log("price £8");
// } else if 
//     (age >= 18 && age < 60) {
//         console.log("price £10.95");
//     } else {
//         console.log("price £7.50");
//     }
// const colour = "red"

// const favColour = (colour) => {
    
//     console.log(`my fav colour is ${colour}`);
//     return grapes
// }
// favColour(colour)

// function favColour() {
//     console.log("my fav colour is blue");
// }
// favColour()

// const addUp = (num1, num2) => num1 * num2

// addUp(2,4);
// console.log(addUp(2,4));

// activity 1: converting function to arrow function
// let factorial = (n) => {
//     if ((n===0)  || (n===1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1))
//     }
// }
// console.log(factorial(10));

// function factorial(n) {
//     if ((n===0)  || (n===1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1))
//     }
// }
// console.log(factorial(33));

//activity 2: pizza topping counter

// let orderCount = 0;
// const takeOrder = (topping1, topping2) => {
//     console.log(`pizza with ${topping1} and ${topping2}`);
//     orderCount++
//     console.log(orderCount);
// }
// takeOrder("pineapple", "pepperoni")
// takeOrder("pineapple", "pepperoni")


//activity 3: cash machine 
const pin = 1234
const balance = 1000

const cashMachine = (pinAttempt, amount) => {
    
    if (pinAttempt === pin) {
        console.log("pin correct");
        if (amount <= balance) {
            console.log(`you withdraw £${amount}`);
        } else {console.log("insufficient funds. try again")}
    } else {
        console.log("pin incorrect. try again");
    }
}

cashMachine(12345, 99999)