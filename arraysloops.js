// let coffeeOrder = ["alex - cortado", "ben - cortado", "charlie - whatevers new"]
// coffeeOrder[2] = "ann - latte"
// coffeeOrder.push("donna - espresso")
// coffeeOrder.pop()
// console.log(coffeeOrder);

// let favSongs = ["the macarena", "despacito", "uptown girl"]
// favSongs.push("ghostbusters theme", "anything beiber")
//favsongs.pop()
// console.log(favSongs);

// let colours = ["red", "blue", "green"]
// colours.splice(1,1, "purple")
// console.log(colours)
// let colours = ["red", "blue", "green"]
// let upper = colours.map(item => item.toUpperCase())
// console.log(upper)

// console.log(favDrinks[0, 1, 2]);
// console.log(favDrinks[1]);
// console.log(favDrinks[2]);

// let favDrinks = ["water", "milkshake", "coffee"]
// for (let index = 0; index < favDrinks.length; index++) {
//     console.log(favDrinks[index]);
// }

// let multiplesTwo = [];
// for(let i = 0; i <=20; i++){
//     if (i % 2 == 0) {
//         multiplesTwo.push(i)
//     }
// }
// console.log(multiplesTwo);

// let age = 15;
// while(age < 18) {
//     console.log("youre a child");
//     age++
// }
// console.log("youre an adult");

// favfilms

// let favFilms = ["men in black", "lotr", "aristocats"]
// favFilms.push("chicken run", "jaws")
// for(let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }

// //random num 1-50 * 6
// for(i = 0; i < 6; i++)
//     console.log(Math.ceil((Math.random()*50)));

// //count 9-0
// for (i = 9; i >= 0; i--){
//     console.log(i);
// }


// // if ghostbusters
// let favFilms = ["men in black", "lotr", "ghostbusfsdrs", "jaws"]
// for (i = 0; i < favFilms.length; i++) {
//     console.log(favFilms[i]);
// }
// if (favFilms[2] == "ghostbusters") {
//     console.log("yay its ghostbusters");
// } else {
//     console.log("boo we want ghostbusters");
// }

// randnum divisble by 7

// let num = ""
// for (i = 0; i < 6; i++){
//     num = Math.ceil(Math.random()*30)
//     console.log(num);
//     if (num % 7 == 0){
//         console.log("divisible by 7");
//     } else {console.log("not divisble by 7");}
// }

// followers array

// let bobsFollowers = ["john", "craig", "mary", "debra"]
// let hannahFollowers = ["craig", "joe", "diane", "mary"]
// let matching = []
// for (i = 0; i < bobsFollowers.length; i++) {
//     //iterates over both arrays, define index value to different letter
//     for (j = 0; j < hannahFollowers.length; j++) {
//         //compares every item from both arrays to see if they match
//         if (bobsFollowers[i] == hannahFollowers[j]) {
//             matching.push(bobsFollowers[i])
//         } // have to push into an array, in this case an empty array definied outside the loops
//     }
// }
// console.log(`${matching[0]} and ${matching[1]} are in both arrays`);

// do while loop

const num = 12
let num2 = 0 // executes at least once even if the condition is false
// do {
//     console.log(num2);
//     num2++}
// while (num < 10) 
// result: 0


while (num2 < 13) {
    console.log(num2)
    num2++;
} // can cause endless loop if condition not met